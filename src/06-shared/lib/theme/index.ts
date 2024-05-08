import { type CSSVariablesResolver, colorsTuple, createTheme, virtualColor } from '@mantine/core'

import { font } from './font'

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  return {
    variables: {
      '--app-spacing-sm': theme.spacing.sm,
      '--app-spacing-md': theme.spacing.md,
      '--app-spacing-xs': theme.spacing.xs,
      '--app-breakpoint-lg': theme.breakpoints.lg,
      '--app-color-primary': theme.colors.primary[0],
      '--app-color-text-secondary': theme.colors['text-secondary'][0],
      '--app-color-bg-secondary': theme.colors['bg-secondary'][0]
    },
    dark: {
      '--mantine-color-body': theme.colors['dark-jungle-green'][0],
      '--mantine-color-text': theme.colors['white-smoke'][0]
    },
    light: {
      '--mantine-color-body': theme.colors['white-smoke'][0],
      '--mantine-color-text': theme.colors['dark-jungle-green'][0]
    }
  }
}

export const theme = createTheme({
  fontFamily: font.style.fontFamily,
  colors: {
    'dark-jungle-green': colorsTuple('#17252A'),
    'mineral-green': colorsTuple('#425e5e'),
    'primary': colorsTuple('#3AAFA9'),
    'white-smoke': colorsTuple('#f5f5f5'),
    'iceberg': colorsTuple('#DEF2F1'),
    'text-primary': virtualColor({
      name: 'text-primary',
      dark: 'white-smoke',
      light: 'dark-jungle-green'
    }),
    'text-secondary': virtualColor({
      name: 'text-secondary',
      dark: 'iceberg',
      light: 'mineral-green'
    }),
    'bg-primary': virtualColor({
      name: 'bg-primary',
      dark: 'dark-jungle-green',
      light: 'white-smoke'
    }),
    'bg-secondary': virtualColor({
      name: 'background',
      dark: 'mineral-green',
      light: 'iceberg'
    })
  },
  primaryColor: 'primary'
})
