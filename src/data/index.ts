import { usePaginate } from "~/utils"
import type { RelatedArticles, PaginateData } from "~/types"

// Get data frontmatter using function getRoutes from useRouter
const getDataRoutes = () => {
  const router = useRouter()
  const routes = router.getRoutes()
  return routes.filter((data) => data.aliasOf === undefined)
}

// Get params's value from url
export const getParams = (value: string) => {
  const router = useRouter()
  return router.currentRoute.value.params[value]
}

// Filter data routes to get the articles data and limit as needed
export const getArticles = (limit?: number) => {
  const isPosts = getDataRoutes()
  .filter((data) => Object.keys(data.meta).length !== 0 && data.meta.frontmatter !== undefined)
  .sort((a, b) => +new Date((b.meta.frontmatter as any).date) - +new Date((a.meta.frontmatter as any).date))
  .slice(0, limit)
  return isPosts
}

// Get the latest article
export const latestArticle = () => {
  const frontmatter = getDataRoutes()
    .filter((data) => Object.keys(data.meta).length !== 0 && data.meta.frontmatter !== undefined)
    .map((data) => data.meta.frontmatter)
    .sort((a: any, b: any) => +new Date(b.date) - +new Date(a.date))
  const latestPost = frontmatter[0]
  return latestPost
}

// Filter data to get specific articles based on tags
export const getArticlesTags = (tags: Array<string>) => {
  const isPosts = getDataRoutes().filter((data) => Object.keys(data.meta).length !== 0 && data.meta.frontmatter !== undefined)
  const filter = isPosts.filter((tag: any) =>
    tags.every((filter) => tag.meta.frontmatter.tags.includes(filter)),
  )
  .sort((a: any, b: any) => +new Date(b.date) - +new Date(a.date))
  return filter
}

// Filter data to get data of search
export const getArticlesSearch = (tags: Array<string>) => {
  const isPosts = getDataRoutes().filter((data) => Object.keys(data.meta).length !== 0 && data.meta.frontmatter !== undefined)
  const filter = isPosts.filter((tag: any) =>
    tags.every((filter) => tag.meta.frontmatter.name.includes(filter)),
  )
  return filter
}
// Filter data to get featured articles data
export const getFeaturedArticles = (limit: number) => {
  const featuredArticles = getDataRoutes()
      .filter((data) => data.meta.frontmatter !== undefined)
      .map((data) => data.meta.frontmatter)
      .filter((data: any) => Boolean(data.featured))
      .slice(0, limit)
  return featuredArticles
}

// Filter data to get related articles data
export const getRelatedArticles = ({ limit, tags, name }: RelatedArticles) => {
  const isPosts = getDataRoutes()
    .filter((data) => Object.keys(data.meta).length !== 0 && data.meta.frontmatter !== undefined)
    .filter((data: any) => data.meta.frontmatter.name !== name)
    .slice(0, limit)
    
    const filter = isPosts.filter((post: any) =>
    tags.some((e) => post.meta.frontmatter.tags.includes(e)),
    )
  return filter
}

// Filter paginate data
export const paginateData = ({ articles, currentPage, pageSize }: PaginateData) => {
  const getArticles = articles
  const { startPage, endPage, startIndex, endIndex } = usePaginate({
    totalItems: getArticles.length,
    currentPage: currentPage,
    pageSize: pageSize,
  })

  const prev: number = currentPage - 1 >= startPage ? currentPage - 1 : 0
  const next: number = currentPage + 1 <= endPage ? currentPage + 1 : 0
  const mid = Array(prev, currentPage, next).filter((value) => value > startPage && value < endPage)

  const listArticles = getArticles.slice(startIndex, endIndex + 1)
  return {
    startPage,
    mid,
    endPage,
    listArticles,
  }
}
