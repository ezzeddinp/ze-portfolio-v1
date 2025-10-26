import React from 'react';
import MainCardDetail from '@/app/layouts/ui/page';

// Forward the params object down to MainCardDetail (server component)
const DetailProjectPage = (props: any) => {
  return <MainCardDetail {...props} />;
};

export default DetailProjectPage;