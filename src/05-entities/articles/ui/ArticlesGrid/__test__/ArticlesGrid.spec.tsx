/**
 * @jest-environment jsdom
 */
import { cleanup } from '@testing-library/react'

import { withProviders } from '@/test/HOC/withProviders'
import { composeHOCs } from '@/test/utils/composeHOCs'
import { renderComponent } from '@/test/utils/renderComponent'

import ArticlesGrid from '../ArticlesGrid'

describe('ArticlesGrid component', () => {
  afterEach(cleanup)

  const Component = composeHOCs(withProviders)(ArticlesGrid)
  const render = renderComponent(Component)

  it('renders correctly', () => {
    expect(render({}).component).toBeInTheDocument()
  })
})
