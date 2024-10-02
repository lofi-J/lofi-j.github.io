import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(() => {
  return {
    plugins: [
      react({ jsxImportSource: '@emotion/react' }),
      svgr()
    ],
    server: {
      port: 3000,
      strictPort: true
    },
    base: '/',
  };
});
