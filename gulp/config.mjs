import { hideBin } from 'yargs/helpers';

const app = 'src/';
const dist = 'dist/';

const isProd = hideBin(process.argv)[1] === '--production';
const isDev = !isProd;

export const config = {
  mode: {
    isDev: isDev,
    isProd: isProd,
  },
};

export const paths = {
  app: app,
  dist: dist,
  components: app + 'pages/components',
  sections: app + 'pages/sections',
  elements: app + 'pages/elements',
  twig: {
    src: app + 'html/*.twig',
    watch: app + 'html/**/*.twig',
    dist: dist + '/',
  },
  styles: {
    fonts: app + 'scss/fonts.scss',
    src: app + 'scss/*.scss',
    watch: app + '/**/*.scss',
    dist: dist + 'css/',
  },
  video: {
    src: app + 'assets/video/*.{mp4,webm,ogv,swf}',
    watch: app + 'assets/video/*.{mp4,webm,ogv,swf}',
    dist: dist + 'assets/video/',
  },
  scripts: {
    src: app + 'js/main.js',
    srcTs: app + 'js/main.ts',
    watch: app + '/**/*.{js,mjs}',
    watchTs: app + '/**/*.ts',
    dist: dist + 'js/',
  },
  fonts: {
    srcFs: app + 'assets/fonts/',
    src: app + 'assets/fonts/*.*',
    watch: app + 'assets/fonts/*.*',
    dist: dist + 'assets/fonts/',
  },
  favicon: {
    srcFs: app + 'assets/favicon/',
    src: app + 'assets/favicon/*.*',
    watch: app + 'assets/favicon/*.*',
    dist: dist + 'assets/favicon/',
  },
  ttf2Woff: {
    src: app + 'assets/fonts/ttf/',
    dist: app + 'assets/fonts/',
  },
  images: {
    src: app + 'assets/img/**/*.{jpg,png,svg,gif,ico,webp}',
    watch: app + 'assets/img/**/*.{jpg,png,svg,gif,ico,webp}',
    dist: dist + 'assets/img/',
  },
  svgSprite: {
    src: app + 'assets/img/icons/*.svg',
    watch: app + 'assets/img/icons/*.svg',
    dist: dist + 'assets/img/',
  },
};
