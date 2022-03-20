import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';

const { src, dest } = gulp;

const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const stylesPath = {
  src: 'src/styles/*.scss',
  dest: 'build/css'
};

export default function styles() {
  return src(stylesPath.src)
    .pipe(plumber())
    .pipe(gulpif(isDevelopment, sourcemaps.init()))
    .pipe(gulpif(isDevelopment, sass(), sass({ outputStyle: 'compressed' })))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulpif(isDevelopment, sourcemaps.write()))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(stylesPath.dest));
};
