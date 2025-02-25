// https://storybook.js.org/addons/@storybook/addon-themes
// https://github.com/storybookjs/storybook/blob/next/code/addons/themes/docs/getting-started/tailwind.md
import React from 'react'
import type { Preview, ReactRenderer } from '@storybook/react'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import { TooltipProvider } from '../components/ui/tooltip'

import '@/app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),

    // https://storybook.js.org/docs/writing-stories/decorators#global-decorators
    Story => (
      <TooltipProvider delayDuration={300}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </TooltipProvider>
    ),
  ],
}

export default preview
