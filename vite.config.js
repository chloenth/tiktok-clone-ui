import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from 'vite-plugin-babel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      // Đảm bảo Babel sử dụng cấu hình từ file .babelrc
      babelConfig: true, // Ensures it reads .babelrc or babel.config.js
    }),
  ],
});
