import { src, dest } from 'gulp';
import svgMin from 'gulp-svgmin';
import svgStore from 'gulp-svgstore';
import { paths } from './config.mjs';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

const svgSprites = () => {
  return src(paths.svgSprite.src)
    .pipe(plumber(
      notify.onError({
        title: 'SVG',
        message: 'Error: <%= error.message %>',
      }),
    ))
    .pipe(svgMin(function getOptions() {
      return {
        plugins: [
          'removeDoctype',
          'removeComments',
          'sortAttrs',
          {
            name: 'cleanupIDs',
            parmas: {
              prefix: 'sprites',
              minify: true,
            },
          },
        ],
      };
    }))
    .pipe(svgStore())
    .pipe(dest(paths.svgSprite.dist));
};

export default svgSprites;
