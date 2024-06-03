'use strict';

import { src, dest } from 'gulp';
import { paths } from './config.mjs';

const favicon = () => {
  return src(paths.favicon.src, { encoding: false })
    .pipe(dest(paths.favicon.dist));
};

export default favicon;
