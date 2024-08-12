'use client'

import { fetcher } from '../../../services/fetcher';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import useSWR from 'swr';
import { useEffect, useMemo, useState } from 'react';

import EmptyState from '@/common/components/elements/EmptyState';
import LoadingCard from '@/common/components/elements/LoadingCard';
import { DEVTO_BLOG_API } from '@/common/constants';
import { BlogItem } from '@/common/types/blog';

import { useBlogView } from '../../../stores/blog-view';
import useIsMobile from '../../../hooks/useIsMobile';

import BlogCard from './BlogCard';
import BlogListHeader from './BlogListHeader';

export default function Blog() {
  const isMobile = useIsMobile();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredBlogs, setFilteredBlogs] = useState<BlogItem[]>([]);
  const { viewOption, setViewOption } = useBlogView();

  const { data, isLoading } = useSWR(DEVTO_BLOG_API, fetcher, {
    revalidateOnMount: true,
  });

  const blogs = useMemo(() => {
    return data?.filter((blog: BlogItem) => blog.collection_id === null) || [];
  }, [data]);
  
  // UseEffect untuk memperbarui filteredBlogs setiap kali searchTerm atau blogs berubah
  useEffect(() => {
    const searchTermLower = searchTerm.toLowerCase();
    const filtered = blogs.filter((blog: BlogItem) => 
      blog.title.toLowerCase().includes(searchTermLower) ||
      blog.description.toLowerCase().includes(searchTermLower)
    );
    setFilteredBlogs(filtered);
  }, [searchTerm, blogs]);

  if (isLoading) {
    return (
      <div
        className={clsx(
          'gap-5 sm:gap-4',
          viewOption === 'list' || isMobile ? 'flex flex-col' : 'grid grid-cols-2 sm:!gap-5'
        )}
      >
        {[1, 2].map((item) => (
          <LoadingCard key={item} view={viewOption} />
        ))}
      </div>
    );
  }

  if (blogs.length === 0 && !isLoading) {
    return <EmptyState message="No Data" />;
  }

  return (
    <>
      {!isMobile && <BlogListHeader viewOption={viewOption} setViewOption={setViewOption} />}
      <div
        className={clsx(
          'mt-6 gap-5 sm:gap-4',
          viewOption === 'list' || isMobile ? 'flex flex-col' : 'grid grid-cols-2'
        )}
      >
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-40 rounded-lg border border-neutral-300 dark:border-neutral-600 text-black/80 dark:text-white/80 bg-black/[.05] dark:bg-white/[.05] col-span-full hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white p-2 dark:focus:border-blue-500 focus:border-neutral-500 focus:outline-none"
        />
        {filteredBlogs.map((item: BlogItem, index: number) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <BlogCard view={viewOption} {...item} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
