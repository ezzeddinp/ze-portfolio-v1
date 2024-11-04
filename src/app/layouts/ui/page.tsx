// src/app/layouts/ui/page.tsx

import React from 'react';
import CardDetailClient from '../../../app/components/CardDetailClient';  // Adjust the import path as necessary

const MainCardDetail: React.FC = () => {
  return (
    <div>
      <CardDetailClient />  {/* Use the Client Component here */}
    </div>
  );
};

export default MainCardDetail;
