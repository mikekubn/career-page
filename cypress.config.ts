// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('cypress');

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
});
