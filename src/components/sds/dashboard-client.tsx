'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import type { SdsDocument } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

type DashboardClientProps = {
  sdsDocuments: SdsDocument[];
};

export default function DashboardClient({
  sdsDocuments,
}: DashboardClientProps) {
  const [search, setSearch] = React.useState('');
  const router = useRouter();

  const filteredDocuments = React.useMemo(() => {
    if (!search) return sdsDocuments;
    const lowercasedSearch = search.toLowerCase();
    return sdsDocuments.filter(
      (doc) =>
        doc.productName.toLowerCase().includes(lowercasedSearch) ||
        doc.manufacturer.toLowerCase().includes(lowercasedSearch) ||
        doc.productCode.toLowerCase().includes(lowercasedSearch)
    );
  }, [search, sdsDocuments]);

  const handleRowClick = (docId: string) => {
    router.push(`/sds/${docId}`);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            SDS Dashboard
          </h1>
          <p className="text-muted-foreground">
            Search and manage your Safety Data Sheets.
          </p>
        </div>
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, manufacturer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
      </header>

      <main>
        <Card>
          <CardHeader>
            <CardTitle>Available Documents</CardTitle>
            <CardDescription>
              A list of all available SDS documents in the system.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Manufacturer</TableHead>
                    <TableHead className="text-center">Version</TableHead>
                    <TableHead className="text-right">Last Updated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDocuments.length > 0 ? (
                    filteredDocuments.map((doc) => (
                      <TableRow
                        key={doc.id}
                        className="cursor-pointer"
                        onClick={() => handleRowClick(doc.id)}
                      >
                        <TableCell className="font-medium">
                          {doc.productName}
                        </TableCell>
                        <TableCell>{doc.manufacturer}</TableCell>
                        <TableCell className="text-center">
                          <Badge variant="secondary">{doc.currentVersion}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          {format(new Date(doc.lastUpdated), 'PPP')}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="h-24 text-center text-muted-foreground"
                      >
                        No results found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
