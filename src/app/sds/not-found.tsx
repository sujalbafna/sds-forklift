import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SdsNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
      <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        SDS Not Found
      </h1>
      <p className="text-muted-foreground mb-6">
        Sorry, we couldn't find the Safety Data Sheet you were looking for.
      </p>
      <Button asChild>
        <Link href="/">Return to Dashboard</Link>
      </Button>
    </div>
  );
}
