import { IconReload } from '@tabler/icons-react'

import { SEARCH_PARAMS_KEYS } from '@/05-entities/app/model/search-params-keys'
import { useSearchParams } from '@/06-shared/lib/third-party/router/useSearchParams'

import Link from '@/06-shared/ui/Link'

import { useFetchArticlesInfinite } from '../../api/articles-infinite/fetch-articles-infinite.client'
import { useArticlesSearchParams } from '../../model/useArticlesSearchParams'

function LoadPreviousPage({ ...rest }) {
  const [, { getFullPath }] = useSearchParams()
  const [searchParams] = useArticlesSearchParams()
  const inifinite = useFetchArticlesInfinite(searchParams)

  const handleClick = () => {
    inifinite.fetchPreviousPage()
  }

  return (
    <Link
      {...rest}
      shallow
      component='button'
      href={getFullPath({ [SEARCH_PARAMS_KEYS.A_PAGE]: inifinite.previousPage.toString() })}
      loading={inifinite.isFetchingPreviousPage}
      onClick={handleClick}
    >
      <IconReload />
    </Link>
  )
}

export default LoadPreviousPage