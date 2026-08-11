import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // 개발 서버가 준비되면 기본 브라우저에서 프로젝트 주소를 자동으로 엽니다.
  // 이제 터미널에서 `npm run dev`만 실행해도 http://localhost:5173/이 열립니다.
  server: {
    open: true,
  },
});
