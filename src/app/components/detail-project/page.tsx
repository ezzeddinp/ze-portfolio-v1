"use client";

import { cards } from '@/components/blocks/ui/expandable-card-data';
import CardDetailSection from '@/app/components/contents/card-detail-ui';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CardDetail: React.FC = () => {
  const { id } = useParams();
  const decodedId = Array.isArray(id) ? decodeURIComponent(id[0]) : decodeURIComponent(id);
  const card = cards.find(card => card.title === decodedId);

  if (!card) {
    return <div>Card not found</div>;
  }

  // Collect all image URLs into an array
  const imageUrls: string[] = [
    card.second,
    card.third,
    card.fourth,
    card.fifth,
    card.sixth,
  ].filter((url): url is string => url !== undefined); // Type guard to ensure only strings

  return (
    <motion.div
      className='flex flex-col justify-center items-center'
      initial={{ opacity: 0, y: 50 }}  // Initial state
      animate={{ opacity: 1, y: 0 }}   // Animated state
      transition={{ duration: 0.8 }}    // Transition settings
    >
      <motion.div
        className='flex flex-col justify-center items-center'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className='flex flex-col justify-center items-center px-[12.5px] lg:px-0'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src={card.src}
            alt={card.title}
            width={500}
            height={500}
            className='h-[270px] md:h-[353px] md:w-[700px] lg:h-[400px] lg:w-[700px] rounded-sm items-center'
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
          <motion.div className='flex flex-col justify-center items-center md:px-36 lg:px-60'>
            <div className='text-left pt-4'>
              <h3 className='text-black dark:text-white font-extrabold text-xl'>{card.title}</h3>
              <p className='text-neutral-500 dark:text-neutral-500 font-normal text-md'>{card.description}</p>
              <div className='text-left pt-4 lg:max-w-lg'>
                <p className='text-black dark:text-neutral-300 text-[15px] font-semibold '>{card.content()}</p>
              </div>
            </div>
            <motion.div
              className='flex flex-row text-left pt-2 gap-4'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className='flex flex-col'>
                <CardDetailSection title="Role" content={card.role} />
                <CardDetailSection title="Collaborators" content={card.collaborators} />
              </div>
              <div className='flex flex-col'>
                <CardDetailSection title="Duration" content={card.duration} />
                <CardDetailSection title="Tools" content={card.tools} />
              </div>
            </motion.div>
            <motion.div
              className='flex flex-row max-w-full py-8'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link href={card.ctaLink} target='_blank' className='flex max-w-full gap-4 md:col-start-5 md:col-end-9 select-none caption group text-black/80 dark:text-white/80 bg-black/[.05] dark:bg-white/[.05] col-span-full hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white items-center flex-row p-4 rounded-md game-border'>
                <button className='flex flex-row justify-between gap-4 items-center w-full'>
                  <div className='flex flex-row gap-2'>
                    <p className='text-left text-sm font-semibold'>{card.ctaText}</p>
                    <p className='text-left text-sm font-semibold'>{card.ctaDescriptionLink}</p>
                  </div>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='h-3 w-3 ml-auto stroke-[3px] stroke-black/30 dark:stroke-white/30 group-hover:stroke-black dark:group-hover:stroke-white'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5'></path>
                  </svg>
                </button>
              </Link>
            </motion.div>
            <motion.div
              className='flex flex-col justify-center items-center gap-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {imageUrls.map((url, index) => (
                <Image
                  key={index}
                  src={url}
                  alt={`${card.title} image ${index + 1}`}
                  width={390}
                  height={200}
                  className='h-[270px] lg:h-[400px] lg:w-[700px] rounded-sm'
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CardDetail;
