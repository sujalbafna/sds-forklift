import DashboardClient from '@/components/sds/dashboard-client';
import { getAllSdsDocuments } from '@/lib/data';

export default function DashboardPage() {
  const sdsDocuments = getAllSdsDocuments();

  return <DashboardClient sdsDocuments={sdsDocuments} />;
}
