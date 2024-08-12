import React from 'react';

type CardDetailSectionProps = {
  title: string;
  content: React.ReactNode;
};

const CardDetailSection: React.FC<CardDetailSectionProps> = ({ title, content }) => (
  <div className='flex flex-col text-left pt-4 flex-1'>
    <h3 className='text-neutral-500 dark:text-neutral-500 font-medium text-md'>{title}</h3>
    <p className='text-black dark:text-white font-bold text-sm pb-2'>{content}</p>
  </div>
);

export default CardDetailSection;
