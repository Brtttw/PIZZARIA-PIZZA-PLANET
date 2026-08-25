import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Projeto criado com: npm create vite@latest -> React -> JavaScript + React Compiler
const ReactCompilerConfig = {
  target: '19', // '17' | '18' | '19'
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', ReactCompilerConfig],
        ],
      },
    }),
  ],
})
