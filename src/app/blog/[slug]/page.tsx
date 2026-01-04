import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getBlogDetail, getComments } from '../../../../services/blog'
import { getBlogViews } from '../../../../services/view'

import BackButton from '@/common/components/elements/BackButton'
import Container from '@/common/components/elements/Container'
import ReaderPage from '@/common/components/elements/ReaderPage'
import { METADATA } from '@/common/constants/metadata'
import Layouts from '@/common/components/layouts/indexForBlog'

type SearchParams = { [key: string]: string | string[] | undefined }

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<SearchParams>
}

function extractArticleId(searchParams: SearchParams | null | undefined): string | null {
  if (!searchParams) return null
  const rawId = searchParams.id
  if (Array.isArray(rawId)) {
    return rawId.length ? rawId[0] ?? null : null
  }
  return rawId ?? null
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const [resolvedParams, resolvedSearchParams] = await Promise.all([params, searchParams])
  const articleId = extractArticleId(resolvedSearchParams)
  const blog = await getBlogDetail({ id: articleId, slug: resolvedParams.slug })
  if (!blog) {
    return {
      title: METADATA.exTitle,
      description: METADATA.description
    }
  }
  return {
    title: `${blog.title} ${METADATA.exTitle}`,
    description: blog.description,
    openGraph: {
      images: blog.cover_image,
      url: `${process.env.DOMAIN}/${blog.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: 'article',
      authors: blog.user.name
    },
    keywords: blog.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/${blog.slug}`
    }
  }
}

export default async function BlogDetailPage({ params, searchParams }: Props) {
  const [resolvedParams, resolvedSearchParams] = await Promise.all([params, searchParams])
  const articleIdFromQuery = extractArticleId(resolvedSearchParams)
  const blog = await getBlogDetail({ id: articleIdFromQuery, slug: resolvedParams.slug })
  if (!blog) {
    notFound()
  }

  const articleId = blog.id
  const pageViewCount = await getBlogViews(articleId)
  const comments = await getComments(articleId)
  return (
    <Layouts className='lg:flex lg:flex-col lg:items-center lg:justify-center'>
      <Container data-aos="fade-left">
        <BackButton url="/blog" />
        <ReaderPage content={blog} pageViewCount={pageViewCount} comments={comments} />
      </Container>
    </Layouts>
  )
}
