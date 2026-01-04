import axios from 'axios'

import { BlogItem } from '@/common/types/blog'

export async function getBlogViews(articleId?: string | number) {
  const idNumber = typeof articleId === 'string' ? parseInt(articleId, 10) : articleId
  if (!Number.isFinite(idNumber)) {
    return 0
  }

  const URL = `https://dev.to/api/articles/me/all`
  try {
    const response = await axios.get(URL, {
      headers: {
        'api-key': process.env.DEVTO_KEY
      }
    })
    if (response.status !== 200) return 0
    const data = response.data

    const findArticle = data?.find((blog: BlogItem) => blog.id === idNumber)
    const page_views_count: number = findArticle?.page_views_count ?? 0
    return page_views_count
  } catch (error) {
    console.error('Failed to fetch blog views', error)
    return 0
  }
}
