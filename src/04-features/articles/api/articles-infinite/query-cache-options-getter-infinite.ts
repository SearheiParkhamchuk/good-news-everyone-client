import { type FetchInfiniteQueryOptions } from '@tanstack/react-query'
import isNil from 'lodash/isNil'
import omitBy from 'lodash/omitBy'

import { type ArticlesQueryParams, type ArticlesResponse } from '@/04-features/articles/model/@types'
import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/model/search-params-keys'

export const queryKeyInfinite = (options?: Partial<ArticlesQueryParams>) => [
  'articles_infinite',
  omitBy(options, (value, key) => isNil(value) || key === SEARCH_PARAMS_KEYS.A_PAGE)
]

type Return = FetchInfiniteQueryOptions<ArticlesResponse, Error, ArticlesResponse, Array<string | object>, string>

export function queryOptionsGetterInfinite(
  fetcher: (params: ArticlesQueryParams, options?: { signal: AbortSignal }) => Promise<ArticlesResponse>
) {
  return function(params: ArticlesQueryParams): Return {
    return {
      queryKey: queryKeyInfinite(params),
      queryFn: async ({ signal }) => {
        return await fetcher(params, { signal })
      },
      initialPageParam: params[SEARCH_PARAMS_KEYS.A_PAGE]
    }
  }
}