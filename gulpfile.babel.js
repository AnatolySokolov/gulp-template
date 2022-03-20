import gulp from 'gulp';
import clean from './tasks/clean.js';
import copyImages from './tasks/copyImages.js';
import copy from './tasks/copy.js';
import minifyImages from './tasks/minifyImages.js';
import scripts from './tasks/scripts.js';
import styles from './tasks/styles.js';
import pug2html from './tasks/pug2html.js';
import watch from './tasks/watch.js';
import webp from './tasks/webp.js';
import pngSprite from './tasks/pngSprite.js';
import svgSprite from './tasks/svgSprite.js';

const { series, parallel } = gulp;

const start = series(
  clean,
  parallel(pug2html, copy, copyImages, styles, scripts),
  watch
);
const build = series(
  clean,
  parallel(pug2html, copy, minifyImages, webp, styles, scripts)
);

export { start, build, pngSprite, svgSprite };
