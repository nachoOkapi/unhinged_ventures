import { redirect } from 'next/navigation';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      {redirect('/entry')}
    </PageTransition>
  );
}
