/*
 * @Author: Tmier
 * @Date: 2024-03-25 20:57:14
 * @LastEditTime: 2024-03-25 21:35:29
 * @LastEditors: Tmier
 * @Description:
 *
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 2077
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'ViteLib', // 暴露的全局变量
      fileName: 'vite-lib', // 输出的包文件名
      formats: ['es', 'umd']
    }
    // rollupOptions: {
    //   external: ['vue', 'element-plus'],
    //   output: {
    //     globals: {
    //       vue: 'Vue',
    //       'element-plus': 'ElementPlus'
    //     }
    //   }
    // }
  }
})
