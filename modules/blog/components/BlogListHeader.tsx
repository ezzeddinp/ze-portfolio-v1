import { BsGrid as GridIcon, BsListUl as ListIcon } from 'react-icons/bs'
import { LuSearch as SearchIcon } from 'react-icons/lu'

import SectionHeading from '@/common/components/elements/SectionHeading'

import ViewOptions from './ViewOptions'

interface BlogListHeaderProps {
  viewOption: 'grid' | 'list'
  setViewOption: (option: 'grid' | 'list') => void
  searchTerm: string
  onSearchChange: (value: string) => void
  resultCount: number
  totalCount: number
  isMobile: boolean
}

export default function BlogListHeader({
  viewOption,
  setViewOption,
  searchTerm,
  onSearchChange,
  resultCount,
  totalCount,
  isMobile
}: BlogListHeaderProps) {
  const trimmedSearch = searchTerm.trim()
  const baseLabel = resultCount === 1 ? 'article' : 'articles'
  const resultLabel = trimmedSearch
    ? `Showing ${resultCount} ${baseLabel} for “${trimmedSearch}”`
    : `${totalCount} ${totalCount === 1 ? 'article' : 'articles'} available`

  return (
    <div className="mt-8 flex w-full flex-col gap-4 rounded-2xl border border-neutral-200/70 bg-white/60 p-4 text-left shadow-sm backdrop-blur-sm dark:border-neutral-800/60 dark:bg-neutral-900/40 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        <SectionHeading title="Latest Articles" />
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{resultLabel}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <label className="relative flex w-full items-center">
          <SearchIcon size={18} className="pointer-events-none absolute left-3 text-neutral-400 dark:text-neutral-500" />
          <input
            type="search"
            value={searchTerm}
            onChange={event => onSearchChange(event.target.value)}
            placeholder="Search articles, keywords, tags..."
            aria-label="Search blog posts"
            className="w-full rounded-xl border border-neutral-200/80 bg-white/90 py-2 pl-10 pr-4 text-sm text-neutral-700 outline-none transition-all duration-200 placeholder:text-neutral-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/40 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-200 dark:placeholder:text-neutral-500"
          />
        </label>
        {!isMobile && (
          <div className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200/80 bg-white/90 p-1 shadow-sm dark:border-neutral-700 dark:bg-neutral-900/80">
            <ViewOptions
              option={viewOption}
              setViewOption={setViewOption}
              type="list"
              icon={<ListIcon size={20} className="p-0.5" />}
              label="Switch to list view"
            />
            <ViewOptions
              option={viewOption}
              setViewOption={setViewOption}
              type="grid"
              icon={<GridIcon size={20} className="p-0.5" />}
              label="Switch to grid view"
            />
          </div>
        )}
      </div>
    </div>
  )
}
