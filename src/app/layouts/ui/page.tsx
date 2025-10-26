// src/app/layouts/ui/page.tsx

import React from 'react';
import CardDetailClient from '../../../app/components/CardDetailClient';

// Server component that receives route params and forwards id to the client component
const MainCardDetail = ({ params }: { params: { id?: string | string[] } }) => {
  const rawId = params?.id ?? null;
  const id = rawId ? (Array.isArray(rawId) ? rawId[0] : rawId) : null;

  return (
    <div>
      <CardDetailClient id={id} />
    </div>
  );
};

export default MainCardDetail;
