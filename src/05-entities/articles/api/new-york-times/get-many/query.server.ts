'use server'
import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/lib/enums/search-params-keys'
import { getFetcherInstance } from '@/06-shared/lib/third-party/fetcher/get-fetcher-instance'

import { withError } from '@/06-shared/lib/utils/errors/decorators/with-error'

import { UnhandledErrorHandler } from '@/06-shared/lib/utils/errors/handlers/UnhandledErrorHandler'

import { type QueryParams, type QuerySuccess } from './@types'
import { NewYorkTimesErrorHandler } from './error-handler'
import { type Article, type ArticleResponseQueryMany } from '../../types/Article'

function paramsAdapter(options: QueryParams): URL {
  const url = new URL('https://api.nytimes.com/svc/search/v2/articlesearch.json')
  const query = options[SEARCH_PARAMS_KEYS.A_QUERY]
  const page = options[SEARCH_PARAMS_KEYS.A_PAGE]

  if (query) url.searchParams.set('q', query)
  if (page) url.searchParams.set('page', page.toString())

  url.searchParams.set('fl', 'lead_paragraph,pub_date,source,web_url,multimedia,abstract')
  url.searchParams.set('api-key', process.env.API_KEY_NEW_YORK_TIMES_ARTICLES)

  return url
}

function responseAdapter(data: QuerySuccess): { data: Article[] } {
  return {
    data: data.response.docs.map(article => {
      const imagePath = article.multimedia[0]?.url
      return {
        description: article.lead_paragraph,
        publishedAt: new Date(article.pub_date),
        source: { name: article.source, src: article.web_url },
        thumbnail: imagePath ? new URL(imagePath, 'https://www.nytimes.com').toString() : null,
        title: article.abstract
      }
    })
  }
}

export async function serverQuery(params: QueryParams): Promise<ArticleResponseQueryMany> {
  const fetcher = getFetcherInstance()

  const response = await fetcher.request<QuerySuccess>({
    method: 'GET',
    url: paramsAdapter(params).toString()
  })

  return { error: null, data: responseAdapter(response.data) }
}

export const NYTArticlesServerQuery = withError(serverQuery, new NewYorkTimesErrorHandler(new UnhandledErrorHandler(null)))
