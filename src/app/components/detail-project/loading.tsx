import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className='flex flex-col justify-center items-center pb-4 animate-pulse'>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[500px] h-[270px] bg-gray-300 rounded-sm mb-4'></div>
        <div className='flex flex-col justify-center items-center px-[12.5px] lg:px-0 w-full max-w-4xl mx-auto'>
          <div className='w-full h-8 bg-gray-300 rounded mb-4'></div>
          <div className='w-full h-6 bg-gray-300 rounded mb-4'></div>
          <div className='w-full h-16 bg-gray-300 rounded mb-4'></div>
          <div className='flex flex-row w-full gap-4'>
            <div className='w-1/2 h-12 bg-gray-300 rounded'></div>
            <div className='w-1/2 h-12 bg-gray-300 rounded'></div>
          </div>
          <div className='w-full h-12 bg-gray-300 rounded mt-4'></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
