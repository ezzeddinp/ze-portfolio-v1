// src/app/components/CardDetailClient.tsx

'use client';  // This directive marks the component as a Client Component

import dynamic from 'next/dynamic';

// Dynamically import the CardDetail component
const CardDetail = dynamic(() => import('@/app/components/detail-project/page'), {
  ssr: false,  // Disable server-side rendering for this component
});

const CardDetailClient: React.FC = () => {
  return <CardDetail />;
};

export default CardDetailClient;
