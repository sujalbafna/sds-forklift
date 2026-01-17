'use client';

import * as React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlertCircle, FlaskConical, Loader2, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getComplianceAnalysis } from '@/lib/actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { getAllSdsDocuments } from '@/lib/data';
import type { SdsDocument } from '@/lib/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const formSchema = z.object({
  sdsDocument: z.string().min(1, 'SDS document content is required.'),
  applicableRegulations: z
    .string()
    .min(1, 'Applicable regulations are required.'),
});

type FormValues = z.infer<typeof formSchema>;

type AnalysisResult = {
  complianceGaps: string[];
  summary: string;
};

export default function CompliancePage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [result, setResult] = React.useState<AnalysisResult | null>(null);
  const { toast } = useToast();
  const sdsDocuments = React.useMemo(() => getAllSdsDocuments(), []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sdsDocument: '',
      applicableRegulations: 'OSHA Hazard Communication Standard (29 CFR 1910.1200)',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    const response = await getComplianceAnalysis(data);
    setIsLoading(false);

    if (response.error) {
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: response.error,
      });
    } else if (response.complianceGaps && response.summary) {
      setResult({
        complianceGaps: response.complianceGaps,
        summary: response.summary,
      });
    }
  };

  const handleSdsSelection = (docId: string) => {
    const selectedDoc = sdsDocuments.find(doc => doc.id === docId);
    if (selectedDoc) {
      const fullText = selectedDoc.sections.map(s => `${s.title}\n${s.content}`).join('\n\n');
      form.setValue('sdsDocument', fullText);
    }
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Regulatory Compliance Analysis
        </h1>
        <p className="text-muted-foreground">
          Use AI to analyze SDS documents for potential compliance gaps.
        </p>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FlaskConical className="h-5 w-5" />
              Analysis Tool
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="sdsDocument"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SDS Document Content</FormLabel>
                       <Select onValueChange={handleSdsSelection}>
                        <SelectTrigger className="mb-2">
                          <SelectValue placeholder="Or select a pre-loaded SDS..." />
                        </SelectTrigger>
                        <SelectContent>
                          {sdsDocuments.map((doc: SdsDocument) => (
                            <SelectItem key={doc.id} value={doc.id}>
                              {doc.productName} - {doc.manufacturer}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormControl>
                        <Textarea
                          placeholder="Paste the full text of the SDS here..."
                          className="h-48"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="applicableRegulations"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Applicable Regulations</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., OSHA Hazard Communication Standard"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide the specific regulations to check against.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  Analyze for Compliance
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Analysis Results</h2>
          {isLoading && (
            <div className="space-y-4">
               <Card>
                 <CardHeader><CardTitle>Loading...</CardTitle></CardHeader>
                 <CardContent className="space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-muted rounded w-1/2 animate-pulse"></div>
                 </CardContent>
               </Card>
            </div>
          )}
          {result && (
            <div className="space-y-6 animate-in fade-in-50">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                    Potential Compliance Gaps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {result.complianceGaps.length > 0 ? (
                    <ul className="list-disc space-y-2 pl-5 text-sm">
                      {result.complianceGaps.map((gap, index) => (
                        <li key={index}>{gap}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No compliance gaps were identified based on the provided
                      information.
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm whitespace-pre-wrap">
                    {result.summary}
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
          {!isLoading && !result && (
            <Alert>
              <FlaskConical className="h-4 w-4" />
              <AlertTitle>Awaiting Analysis</AlertTitle>
              <AlertDescription>
                Enter an SDS document and the relevant regulations, then click
                the analyze button to see the AI-powered compliance check.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </main>
    </div>
  );
}
