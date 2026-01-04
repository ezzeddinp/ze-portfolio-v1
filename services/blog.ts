import axios from 'axios'

import { DEVTO_BLOG_API } from '@/common/constants'
import { formatBlogSlug } from '@/common/helpers'
import { BlogDetailProps, BlogItem, CommentItemProps } from '@/common/types/blog'

type ArticleLookupInput = {
  id?: string | number | null
  slug?: string | null
}

const authHeaders = {
  headers: {
    'api-key': process.env.DEVTO_KEY
  }
}

async function resolveArticleId({ id, slug }: ArticleLookupInput): Promise<string | null> {
  if (id !== null && id !== undefined) {
    return String(id)
  }

  if (!slug) {
    return null
  }

  try {
    const articles = await getBlogData()
    const matchedArticle = articles.find(article => {
      const formattedSlug = formatBlogSlug(article.slug)
      return formattedSlug === slug || article.slug === slug
    })

    return matchedArticle ? String(matchedArticle.id) : null
  } catch (error) {
    console.error('Failed to resolve article ID from slug', error)
    return null
  }
}

export async function getBlogData(): Promise<BlogItem[]> {
  try {
    const response = await axios.get(DEVTO_BLOG_API)
    if (response?.status !== 200) return []
    return response.data
  } catch (error) {
    console.error('Failed to fetch blog data', error)
    return []
  }
}

export async function getBlogDetail({ id, slug }: ArticleLookupInput): Promise<BlogDetailProps | null> {
  try {
    const articleId = await resolveArticleId({ id, slug })
    if (!articleId) {
      return null
    }

    const URL = `https://dev.to/api/articles/${articleId}`
    const response = await axios.get(URL, authHeaders)
    if (response.status !== 200) return null
    return response.data
  } catch (error) {
    console.error('Failed to fetch blog detail', error)
    return null
  }
}

export async function getComments(postId?: string | number): Promise<CommentItemProps[]> {
  const id = typeof postId === 'number' ? postId.toString() : postId ?? ''
  if (!id) {
    return []
  }

  const DEV_TO_URL = `https://dev.to/api/comments/?a_id=${id}`
  try {
    const response = await axios.get(DEV_TO_URL, authHeaders)
    if (response?.status !== 200) return []
    return response.data
  } catch (error) {
    console.error('Failed to fetch blog comments', error)
    return []
  }
}
