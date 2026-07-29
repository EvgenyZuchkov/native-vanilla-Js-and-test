// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
//
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


/// <reference types="vitest" />
import { defineConfig } from 'vitest/config' // исправление ошибки связанной с неизвестным свойством test для vite
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,      // позволяет использовать test/expect без импорта
    environment: 'jsdom' // эмулируем браузер
  }
})
