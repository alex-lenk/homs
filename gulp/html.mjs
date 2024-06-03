'use strict';

import { src, dest } from 'gulp';
import { paths } from './config.mjs';
import twig from 'gulp-twig';
import browsersync from 'browser-sync';

const twigHtml = () => {
  return src(paths.twig.src)
    .pipe(twig({
      data: {
        title: 'Gulp and Twig',
        benefits: [
          'Fast',
          'Flexible',
          'Secure',
        ],
      },
    }))
    .pipe(dest(paths.twig.dist))
    .on('end', browsersync.reload);
};

export default twigHtml;
