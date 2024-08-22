// Import dynamic from Next.js to handle dynamic imports
import dynamic from 'next/dynamic';

// Dynamically import the IntroLogic component and disable SSR
const IntroLogic = dynamic(() => import('./intro-logic'), { ssr: false });

export default function Page() {
  return (
    <div>
      <IntroLogic />
    </div>
  );
}
