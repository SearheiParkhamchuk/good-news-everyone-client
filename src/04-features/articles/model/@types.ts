import { type SEARCH_PARAMS_KEYS } from '@/05-entities/app/model/search-params-keys'
import { type ApiResponse } from '@/06-shared/lib/utils/errors/types/ApiResponse'

export type Article = {
  description: string
  publishedAt: Date
  source: { name: string, src: string }
  thumbnail: string | null
  title: string
}

export type ArticleSerialized = {
  description: string
  publishedAt: string
  source: { name: string, src: string }
  thumbnail: string | null
  title: string
}

export type ArticleResponseQueryMany = ApiResponse<{
  data: Article[]
}>

export type ArticleSerializedResponseQueryMany = ApiResponse<{
  data: ArticleSerialized[]
}>

export type ArticlesQueryParams = {
  [SEARCH_PARAMS_KEYS.A_PAGE]: string
  [SEARCH_PARAMS_KEYS.A_PAGE_SIZE]?: string
  [SEARCH_PARAMS_KEYS.A_QUERY]?: string
}

export type ArticlesLocalQueryParams = {
  page?: number
  pageSize?: number
  query?: string
}