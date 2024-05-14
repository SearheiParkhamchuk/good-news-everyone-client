import { type UseQueryOptions } from '@tanstack/react-query'

import { type ArticleSerializedResponseQueryMany, type ArticlesQueryParams } from '../../../@types'

export const queryKey = (options: ArticlesQueryParams) => ['articles', options, 'fake_news']

export function queryOptionsGetter(
  fetcher: (params: ArticlesQueryParams, options?: { signal: AbortSignal }) => Promise<ArticleSerializedResponseQueryMany>
) {
  return function(params: ArticlesQueryParams): UseQueryOptions<ArticleSerializedResponseQueryMany> {
    return {
      queryKey: queryKey(params),
      queryFn: async ({ signal }) => await fetcher(params, { signal })
    }
  }
}
