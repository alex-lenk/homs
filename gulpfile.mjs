'use strict';

import { paths } from './gulp/config.mjs';

import gulp from 'gulp';

import switchPug from './gulp/switch-pug.mjs';
import twigHtml from './gulp/html.mjs';
import styles from './gulp/styles.mjs';
import scripts from './gulp/scripts.mjs';
import serve from './gulp/serve.mjs';
import images from './gulp/images.mjs';
import video from './gulp/video.mjs';
import fonts from './gulp/fonts.mjs';
import favicon from './gulp/favicon.mjs';
import zipDist from './gulp/zip.mjs';
import ttfToWoff from './gulp/ttf-woff.mjs';
import fontsInStyle from './gulp/fonts-in-style.mjs';
import svgSprites from './gulp/svgSprites.js';
// import clean from './gulp/clean.mjs';

gulp.task(switchPug);
gulp.task(zipDist);
gulp.task(ttfToWoff);
gulp.task(fontsInStyle);
gulp.task(svgSprites);

const watchFiles = () => {
  gulp.watch(paths.twig.watch, gulp.parallel(twigHtml));
  gulp.watch(paths.twig.watch, gulp.parallel(twigHtml));
  gulp.watch(paths.styles.watch, gulp.parallel(styles));
  gulp.watch(paths.scripts.watch, gulp.parallel(scripts));
  gulp.watch(paths.images.watch, gulp.parallel(images));
  gulp.watch(paths.video.watch, gulp.parallel(video));
  gulp.watch(paths.fonts.watch, gulp.parallel(fonts));
  gulp.watch(paths.favicon.watch, gulp.parallel(favicon));
};

export const build = gulp.series(
  // clean,
  twigHtml,
  gulp.parallel(styles, scripts, images, svgSprites, fonts, favicon),
);

export const watch = gulp.parallel(build, watchFiles, serve);
