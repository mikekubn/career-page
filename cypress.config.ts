import { defineConfig } from 'cypress';

export default defineConfig({
  retries: {
    runMode: 1,
    openMode: 0,
  },

  viewportHeight: 1000,
  viewportWidth: 1800,

  e2e: {
    baseUrl: 'http://localhost:3000',
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
