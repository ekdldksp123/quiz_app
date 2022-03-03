const path = require('path');

module.exports = {
  features: {
    interactionsDebugger: true,
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
    "@storybook/addon-interactions",
    "@storybook/addon-actions", 
    "@storybook/addon-controls",
  ],
  webpackFinal: async (config) => {
    // node_mules폴더와 styles 폴더 안의 모듈을 인식할 수 있게 함
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules', 'styles'];
     // 절대 경로 설정
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../components'),
      '@assets': path.resolve(__dirname, '../public/'),
    };
    return config;
  },
  "framework": "@storybook/react",
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
}