"use client"

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { TbMessage2 as CommentIcon } from 'react-icons/tb'
import { LuClock3 as ClockIcon } from 'react-icons/lu'

import Card from '@/common/components/elements/Card'
import { PLACEHOLDER_URL } from '@/common/constants'
import { formatBlogSlug, formatDate } from '@/common/helpers'
import clsxm from '@/common/libs/clsxm'
import { sendDataLayer } from '@/common/libs/gtm'
import { BlogItem } from '@/common/types/blog'
import useIsMobile from '../../../hooks/useIsMobile'

interface BlogCardProps extends BlogItem {
  view?: string
  isExcerpt?: boolean
  isCarousel?: boolean
}


export default function BlogCard({
  id,
  title,
  cover_image,
  published_at,
  description,
  slug,
  comments_count,
  view,
  isExcerpt = true,
  isCarousel = false,
  collection_id,
  reading_time_minutes,
  tag_list
}: BlogCardProps) {
  const [viewOption, setViewOption] = useState<'grid' | 'list'>('grid')
  const isMobile = useIsMobile()
  const router = useRouter()
  const pathname = usePathname()

  const newSlug = formatBlogSlug(slug)

  const resolvedView = useMemo<'grid' | 'list'>(() => (view === 'list' ? 'list' : 'grid'), [view])
  const isGridView = viewOption === 'grid'
  const trimmedTitle = isGridView ? `${title.slice(0, 80)}${title.length > 80 ? '…' : ''}` : title
  const trimmedContent = `${description.slice(0, isGridView ? 110 : 160)}${description.length > (isGridView ? 110 : 160) ? '…' : ''}`
  const visibleTags = useMemo(() => (Array.isArray(tag_list) ? tag_list.slice(0, 3) : []), [tag_list])
  const readingTime = Math.max(1, reading_time_minutes ?? 0)

  function handleCardClick() {
    sendDataLayer({
      event: 'article_clicked',
      article_id: id,
      article_title: title,
      article_collection_id: collection_id || '',
      page_path: pathname
    })
    router.push(`/blog/${newSlug}?id=${id}&read-mode=true`)
  }

  useEffect(() => {
    setViewOption(isMobile ? 'grid' : resolvedView)
  }, [isMobile, resolvedView])

  return (
    <Card
      onClick={handleCardClick}
      className={clsxm(
            'group relative h-full w-full cursor-pointer overflow-hidden border border-neutral-200/80 bg-white/80 !flex-col lg:!flex-col !px-0 !py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800/70 dark:bg-neutral-900/40',
        !isGridView && '!flex-col sm:!flex-row',
        isCarousel && 'min-w-[350px]'
      )}
    >
      <div
        className={clsxm(
          'relative w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800/60',
          isGridView ? 'aspect-[16/10]' : 'h-48 sm:h-auto sm:w-60'
        )}
      >
        <Image
          src={cover_image || PLACEHOLDER_URL}
          alt={title}
          fill
          sizes={isGridView ? "(min-width: 1280px) 360px, (min-width: 768px) 45vw, 100vw" : "(min-width: 1024px) 320px, 50vw"}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          priority={false}
        />
      </div>
      <article
        className={clsxm(
          'flex h-full w-full flex-col gap-4 px-4 py-5 sm:px-6',
          isGridView ? 'sm:pt-6' : 'sm:py-6'
        )}
      >
        {visibleTags.length > 0 && (
              <div className="flex flex-wrap gap-2 text-[0.65rem] font-semibold uppercase tracking-wide text-neutral-600 dark:text-white">
            {visibleTags.map(tag => (
              <span
                key={`${id}-${tag}`}
                   className="rounded-full border border-neutral-200/80 bg-neutral-100 px-2.5 py-1 text-[0.65rem] text-neutral-700 shadow-sm dark:border-white/20 dark:bg-white/10 dark:text-white"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
            <h2 className="text-lg font-semibold leading-tight text-neutral-800 transition-colors duration-300 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-300">
          {trimmedTitle}
        </h2>
        {isExcerpt && (
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {trimmedContent}
          </p>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-1">
            <ClockIcon size={14} />
            <span>{readingTime} min read</span>
          </div>
          <div className="flex items-center gap-1">
            <span>{formatDate(published_at, 'MMM dd, yyyy')}</span>
          </div>
          <div className="flex items-center gap-1">
            <CommentIcon size={16} />
            <span>
              {comments_count} comment{comments_count === 1 ? '' : 's'}
            </span>
          </div>
        </div>
      </article>
    </Card>
  )
}
