import { defineConfig } from 'vite';
// import autoprefixer from 'autoprefixer';
// import ssr from 'vite-plugin-ssr/plugin'

export default defineConfig({
  build: {
    target: 'esnext',
  },
  // css: {
  //   postcss: {
  //     plugins: [
  //       autoprefixer(),
  //     ],
  //   },
  // },
});
