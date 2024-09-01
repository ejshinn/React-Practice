import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // CORS 오류를 해결하기 위한 프록시 서버 설정
    // server: {
    //     proxy: {
    //         // 리액트에서 사용하는 프록시 기본 서버 주소 이름을 설정
    //         '/api': {
    //             // 실제 접속할 서버의 주소 설정
    //             target: "http://localhost:8080",
    //             // CORS 해결 설정 사용
    //             changeOrigin: true,
    //             // 프록시 서버에서 사용할 URL 경로 설정
    //             rewrite: (path) => path.replace(/^\/api/, ''),
    //         },
    //     },
    // },
});