import React from 'react';
import { GlobalStyle } from '../src/utils/global';
import { themes } from '@storybook/theming';

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.dark,
  },
}