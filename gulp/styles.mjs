'use strict';

import { src, dest } from 'gulp';
import { paths, config } from './config.mjs';

import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import gulpIf from 'gulp-if';
import groupMedia from 'gulp-group-css-media-queries';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'gulp-postcss';
import browsersync from 'browser-sync';

const scss = gulpSass(sass);

const styles = () => {
  return src(paths.styles.src)
    .pipe(gulpIf(config.mode.isDev, sourcemaps.init()))
    .pipe(scss({ outputStyle: 'expanded' }))
    .pipe(groupMedia())
    .pipe(
      gulpIf(
        config.mode.isProd,
        postcss([
          autoprefixer({
            cascade: false,
            grid: true,
          }),
          cssnano()
        ])
      )
    )
    .pipe(
      gulpIf(
        config.mode.isProd,
        rename({
          suffix: '.min',
        }),
      ),
    )
    .pipe(gulpIf(config.mode.isDev, sourcemaps.write('./maps/')))
    .pipe(dest(paths.styles.dist))
    .on('end', browsersync.reload);
};

export default styles;
