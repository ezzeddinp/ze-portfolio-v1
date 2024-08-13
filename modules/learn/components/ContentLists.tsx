"use client"

import { fetcher } from '../../../services/fetcher';
import { motion } from 'framer-motion';
import React, { useMemo } from 'react';
import useSWR from 'swr';

import EmptyState from '@/common/components/elements/EmptyState';
import { DEVTO_BLOG_API } from '@/common/constants';
import { BlogItem } from '@/common/types/blog';
import { ContentProps } from '@/common/types/learn';

import LearnSubContentItem from './LearnSubContentItem';

interface ContentListsProps {
  content: ContentProps | null; // Handle case where content might be null
}

export default function ContentLists({ content }: ContentListsProps) {
  const { data, isLoading } = useSWR(DEVTO_BLOG_API, fetcher, {
    revalidateOnMount: true
  });

  // Use useMemo to filter and sort the data
  const learns: BlogItem[] = useMemo(() => {
    if (!data || !content) return []; // Return empty array if data or content is null
    const filteredLearns = data.filter((blog: BlogItem) => blog.collection_id === content.id);
    filteredLearns.sort((a: BlogItem, b: BlogItem) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);
      return dateA.getTime() - dateB.getTime();
    });
    return filteredLearns;
  }, [data, content]);

  // Show loading state while data is being fetched
  if (isLoading) {
    return (
      <div className="flex flex-col gap-3">
        {[1, 2, 3].map(item => (
          <div key={item} className="h-14 animate-pulse rounded-xl bg-neutral-300 dark:bg-neutral-700" />
        ))}
      </div>
    );
  }

  // Show empty state if there are no learns and loading is complete
  if (learns.length === 0 && !isLoading) {
    return <EmptyState message="No Data" />;
  }

  // Show a fallback if content is null
  if (!content) {
    return <div>No Content Available</div>;
  }

  return (
    <div className="flex flex-col gap-3">
      {learns.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <LearnSubContentItem
            parent={content.title}
            contentSlug={content.slug}
            subContentSlug={item.slug}
            title={item.title}
            language={content.language}
            difficulty={content.level}
            postId={`${item.id}`}
          />
        </motion.div>
      ))}
    </div>
  );
}
