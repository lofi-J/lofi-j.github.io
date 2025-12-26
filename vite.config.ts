import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react({ jsxImportSource: '@emotion/react' }), svgr()],
  base: './', // 상대 경로로 설정하여 어떤 환경에서도 작동하도록
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    target: 'esnext', // 최신 JavaScript 버전으로 빌드
    minify: 'terser', // minify 설정
    rollupOptions: {
      output: {
        entryFileNames: '[name].js', // .js로 빌드
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
