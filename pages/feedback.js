import { useAuth } from '@/lib/auth';
import useSWR from 'swr';
import EmptyState from '@/components/EmptyState';
import DashboarShell from '@/components/DashboardShell';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import { fetcher } from '@/utils/fetcher';
import FeedbackTable from '@/components/FeedbackTable';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';

function MyFeedback() {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/feedback', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboarShell>
        <FeedbackTableHeader />
        <SiteTableSkeleton />
      </DashboarShell>
    );
  }
  return (
    <DashboarShell>
      <FeedbackTableHeader />
      {data.feedback.length ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <EmptyState />
      )}
    </DashboarShell>
  );
}

export default MyFeedback;
