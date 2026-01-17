'use client';

import { notFound } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getSdsDocumentById } from '@/lib/data';
import { format } from 'date-fns';
import { FileText, History, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EmergencySummary from '@/components/sds/emergency-summary';

type SdsPageProps = {
  params: {
    id: string;
  };
};

export default function SdsPage({ params }: SdsPageProps) {
  const sdsDocument = getSdsDocumentById(params.id);

  if (!sdsDocument) {
    notFound();
  }
  
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            {sdsDocument.productName}
          </h1>
          <p className="text-muted-foreground">
            {sdsDocument.manufacturer} - Code: {sdsDocument.productCode}
          </p>
        </div>
        <div className="flex items-center gap-2">
            <EmergencySummary sdsDocument={sdsDocument} />
             <Button variant="outline" onClick={handlePrint}>
                <Printer />
                Print / Download
            </Button>
        </div>
      </header>

      <main>
        <Tabs defaultValue="details">
          <TabsList className="grid w-full grid-cols-2 sm:w-[400px]">
            <TabsTrigger value="details">
              <FileText className="mr-2" />
              SDS Details
            </TabsTrigger>
            <TabsTrigger value="history">
              <History className="mr-2" />
              Version History
            </TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Safety Data Sheet</CardTitle>
                <CardDescription>
                  Current Version: {sdsDocument.currentVersion} (
                  {format(new Date(sdsDocument.lastUpdated), 'PPP')})
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {sdsDocument.sections.map((section, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger>{section.title}</AccordionTrigger>
                      <AccordionContent className="whitespace-pre-wrap text-sm">
                        {section.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Version History</CardTitle>
                <CardDescription>
                  Review changes and updates to this document over time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Version</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Summary of Changes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sdsDocument.versions.map((version) => (
                      <TableRow key={version.version}>
                        <TableCell>
                          <Badge
                            variant={
                              version.version === sdsDocument.currentVersion
                                ? 'default'
                                : 'secondary'
                            }
                          >
                            {version.version}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {format(new Date(version.date), 'PPP')}
                        </TableCell>
                        <TableCell>{version.author}</TableCell>
                        <TableCell>{version.summary}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
