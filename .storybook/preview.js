//.storybook/preview.js

import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import theme from '../src/theme';

import { GlobalStyle } from '../src/shared/global';

 // Global decorator to apply the styles to all stories
 export const decorators = [
   Story => (
     <>
       <GlobalStyle />
       <Story />
     </>
   ),
 ];

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [theme]));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}