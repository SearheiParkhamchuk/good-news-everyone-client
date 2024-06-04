'use client'
import { useArticlesView } from 'src/04-features/articles-view/model/useArticlesView'
import { ARTICLE_ORIENTATION } from 'src/05-entities/articles/model/article-orientation'
import ArticleSkeleton from 'src/05-entities/articles/ui/ArticleSkeleton'
import ArticlesGrid from 'src/05-entities/articles/ui/ArticlesGrid'
import { withSuspense } from 'src/06-shared/lib/utils/HOK/withSuspense'
import { GRID_VIEW } from 'src/06-shared/ui/GridViewButton/model'

function ArticlesSkeleton() {
  const [view] = useArticlesView()

  return (
    <ArticlesGrid view={view}>
      {new Array(9).fill(null).map((_, index) => (
        <ArticleSkeleton
          key={index}
          orientation={view === GRID_VIEW.GRID ? ARTICLE_ORIENTATION.VERTICAL : ARTICLE_ORIENTATION.HORIZONTAL}
        />
      ))}
    </ArticlesGrid>
  )
}

export default withSuspense(ArticlesSkeleton)
