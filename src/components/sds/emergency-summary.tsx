'use client';

import * as React from 'react';
import { Siren, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { getEmergencySummary } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import type { SdsDocument } from '@/lib/types';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '../ui/skeleton';

type EmergencySummaryProps = {
  sdsDocument: SdsDocument;
};

export default function EmergencySummary({ sdsDocument }: EmergencySummaryProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [summary, setSummary] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const handleOpenChange = async (open: boolean) => {
    setIsOpen(open);
    if (open && !summary) {
      setIsLoading(true);
      const fullText = sdsDocument.sections
        .map((s) => `${s.title}\n${s.content}`)
        .join('\n\n');

      const response = await getEmergencySummary({ sdsDocument: fullText });
      setIsLoading(false);

      if (response.error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: response.error,
        });
      } else {
        setSummary(response.summary || 'Could not generate summary.');
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Siren />
          Emergency Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Siren className="text-destructive" />
            Emergency Response Guide for {sdsDocument.productName}
          </DialogTitle>
          <DialogDescription>
            A quick-access guide with critical information for emergency
            responders. This is an AI-generated summary and should be used as a
            supplement to the full SDS.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 max-h-[60vh] overflow-y-auto">
          {isLoading && (
            <div className="space-y-4">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/3 mt-4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          )}
          {summary && (
            <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
              {summary}
            </div>
          )}
          {!isLoading && !summary && (
             <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Could not load the emergency summary. Please try again.</AlertDescription>
            </Alert>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
