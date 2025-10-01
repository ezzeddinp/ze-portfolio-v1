'use client'

import { fetcher } from '../../../services/fetcher'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import useSWR from 'swr'
import { useDeferredValue, useMemo, useState } from 'react'

import EmptyState from '@/common/components/elements/EmptyState'
import LoadingCard from '@/common/components/elements/LoadingCard'
import { DEVTO_BLOG_API } from '@/common/constants'
import { BlogItem } from '@/common/types/blog'

import { useBlogView } from '../../../stores/blog-view'
import useIsMobile from '../../../hooks/useIsMobile'

import BlogCard from './BlogCard'
import BlogListHeader from './BlogListHeader'

export default function Blog() {
  const isMobile = useIsMobile()
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { viewOption, setViewOption } = useBlogView()

  const handleViewChange = (option: 'grid' | 'list') => {
    setViewOption(option)
  }

  const normalizedSearch = searchTerm.trim().toLowerCase()
  const deferredSearchTerm = useDeferredValue(normalizedSearch)

  const { data, isLoading } = useSWR(DEVTO_BLOG_API, fetcher, {
    revalidateOnMount: true
  })

  const blogs = useMemo(() => {
    return data?.filter((blog: BlogItem) => blog.collection_id === null) || []
  }, [data])

  const filteredBlogs = useMemo(() => {
    if (!deferredSearchTerm) {
      return blogs
    }

    return blogs.filter((blog: BlogItem) => {
      const title = blog.title?.toLowerCase() || ''
      const description = blog.description?.toLowerCase() || ''
      const tags = Array.isArray(blog.tag_list) ? blog.tag_list.join(' ').toLowerCase() : ''
      return (
        title.includes(deferredSearchTerm) ||
        description.includes(deferredSearchTerm) ||
        tags.includes(deferredSearchTerm)
      )
    })
  }, [blogs, deferredSearchTerm])

  const resolvedViewOption: 'grid' | 'list' = isMobile ? 'grid' : (viewOption === 'list' ? 'list' : 'grid')

  const itemsWrapperClass = clsx(
    'mt-8 w-full',
    resolvedViewOption === 'list'
      ? 'flex flex-col gap-8'
      : 'grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3'
  )

  const header = (
    <BlogListHeader
      viewOption={resolvedViewOption}
      setViewOption={handleViewChange}
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
      resultCount={filteredBlogs.length}
      totalCount={blogs.length}
      isMobile={isMobile}
    />
  )

  if (isLoading) {
    return (
      <div className="space-y-8">
        {header}
        <div className={itemsWrapperClass}>
          {[1, 2, 3].map(item => (
            <LoadingCard key={item} view={resolvedViewOption} />
          ))}
        </div>
      </div>
    )
  }

  if (!blogs.length) {
    return (
      <div className="space-y-8">
        {header}
        <EmptyState message="No articles available yet." />
      </div>
    )
  }

  if (!filteredBlogs.length) {
    return (
      <div className="space-y-8">
        {header}
        <EmptyState
          message={`We couldn't find any articles matching “${searchTerm.trim()}”. Try another keyword or tag.`}
        />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {header}
      <div className={itemsWrapperClass}>
        {filteredBlogs.map((item: BlogItem, index: number) => (
          <motion.div
            key={item.id}
            className="group h-full"
            initial={{ opacity: 0, translateY: 12 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
          >
            <BlogCard view={resolvedViewOption} {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
