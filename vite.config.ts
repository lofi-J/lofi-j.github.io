import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react({ jsxImportSource: '@emotion/react' }),
      svgr()
    ],
    server: {
      port: 3000,
      strictPort: true
    },
    base: mode === 'production' ? '/HomePage/' : '/', // 프로덕션에서는 /HomePage/ 경로, 개발 환경에서는 기본 경로
  };
});
