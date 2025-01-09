import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // 프록시 서버를 사용하여 cors 회피
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                // cors를 회피하는 대신 react에서 접속하는 주소를 전부 /api/** 형태로 사용
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})