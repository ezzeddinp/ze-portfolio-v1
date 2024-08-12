import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the CardDetail component
const CardDetail = dynamic(() => import('@/app/components/detail-project/page'), {
  ssr: false,  // Disable server-side rendering for this component
});

const MainCardDetail: React.FC = () => {
  return (
    <div>
      {/* Your other page content */}
      <CardDetail />
    </div>
  );
};

export default MainCardDetail;
