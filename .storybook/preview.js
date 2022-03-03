import React from "react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import theme from "./theme";
import GlobalStyles from "./reset";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}