'use client'
import { withSuspense } from 'src/06-shared/lib/utils/HOK/withSuspense'
import GridViewButton from 'src/06-shared/ui/GridViewButton'

import { useArticlesView } from '../../model/useArticlesView'

function ArticlesGridViewButton() {
  const [view, setView] = useArticlesView()

  return <GridViewButton value={view} onChange={setView} />
}

export default withSuspense(ArticlesGridViewButton)
