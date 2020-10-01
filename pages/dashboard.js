import { useAuth } from '@/lib/auth';
import useSWR from 'swr';
import EmptyState from '@/components/EmptyState';
import DashboarShell from '@/components/DashboardShell';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import { fetcher } from '@/utils/fetcher';
import SiteTable from '@/components/SiteTable';
import SiteTableHeader from '@/components/SiteTableHeader';

function Dashboard() {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboarShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboarShell>
    );
  }
  return (
    <DashboarShell>
      <SiteTableHeader isPaidAccount={true} />
      {data.sites.length ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboarShell>
  );
}

export default Dashboard;
