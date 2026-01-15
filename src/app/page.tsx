import DashboardClient from '@/components/DashboardClient';
import { getArticles } from './actions';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default async function Page() {
  const articles = await getArticles();
  return <DashboardClient initialArticles={articles} />;
}
