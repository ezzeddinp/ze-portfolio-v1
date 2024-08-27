// Import dynamic from Next.js to handle dynamic imports
import IdCard from '@/app/components/IdCard';
import dynamic from 'next/dynamic';

// Dynamically import the IntroLogic component and disable SSR
const IntroLogic = dynamic(() => import('./intro-logic'), { ssr: false });

export default function Page() {
  return (
    <div >
      <IntroLogic />
      {/* <IdCard className="col-span-1 lg:col-span-1" /> */}
    </div>
  );
}
