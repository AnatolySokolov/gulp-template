import gulp from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';

const { src, dest } = gulp;

const pug2htmlPath = {
  src: 'src/pug/pages/*.pug',
  dest: 'build'
};

export default function pug2html() {
  return src(pug2htmlPath.src)
    .pipe(plumber())
    .pipe(pug())
    .pipe(dest(pug2htmlPath.dest));
};
