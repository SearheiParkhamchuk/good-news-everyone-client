import { useCallback } from 'react';

import { ARTICLES_SEARCH_PARAMS_KEYS } from 'src/05-entities/articles';

import { pickEnumSearchParameter } from 'src/06-shared/lib/third-party/router/pick-enum-search-parameter';
import { useSearchParams } from 'src/06-shared/lib/third-party/router/useSearchParams';
import { GRID_VIEW } from 'src/06-shared/ui/GridViewButton/model';

const DEFAULT_VIEW = GRID_VIEW.LIST;

export function useArticlesView() {
  const [searchParams, { set }] = useSearchParams();

  const view = pickEnumSearchParameter(searchParams, GRID_VIEW, ARTICLES_SEARCH_PARAMS_KEYS.A_GRID_VIEW) ?? DEFAULT_VIEW;

  const setArticlesView = useCallback(
    (value: GRID_VIEW) => {
      set({ [ARTICLES_SEARCH_PARAMS_KEYS.A_GRID_VIEW]: value });
    },
    [set],
  );

  return [view, setArticlesView] as const;
}
