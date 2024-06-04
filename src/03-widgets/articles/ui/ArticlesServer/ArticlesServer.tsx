'use server'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { fetchArticlesInfinite } from 'src/04-features/articles/api/articles-infinite/fetch-articles-infinite.server'
import { getArticlesQueryParams } from 'src/04-features/articles/model/get-articles-query-params'
import ArticlesGridViewSkeleton from 'src/04-features/articles-view/ui/ArticlesGridViewSkeleton'
import { withSuspense } from 'src/06-shared/lib/utils/HOK/withSuspense'

import { type ArticlesServerProps } from './types'
import ArticlesClient from '../ArticlesClient'

async function ArticlesServer({ searchParams }: ArticlesServerProps) {
  const { cache } = await fetchArticlesInfinite(getArticlesQueryParams(searchParams))

  return (
    <HydrationBoundary state={dehydrate(cache)}>
      <ArticlesClient />
    </HydrationBoundary>
  )
}

export default withSuspense(ArticlesServer, { fallback: <ArticlesGridViewSkeleton /> })
