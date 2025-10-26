// src/app/components/CardDetailClient.tsx

'use client';

import CardDetail from '@/app/components/detail-project/page';
import React from 'react';

const CardDetailClient: React.FC<{ id: string | null }> = ({ id }) => {
  return <CardDetail id={id} />;
};

export default CardDetailClient;
