import gulp from 'gulp';
import plumber from 'gulp-plumber';
import terser from 'gulp-terser';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import gulpif from 'gulp-if';
import babel from 'gulp-babel';

const { src, dest } = gulp;

const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const scriptsPath = {
  src: ['src/scripts/*.js', 'src/scripts/**/*.js'],
  dest: 'build/js',
};

export default function scripts() {
  return src(scriptsPath.src)
    .pipe(plumber())
    .pipe(gulpif(isDevelopment, sourcemaps.init()))
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(concat('index.min.js'))
    .pipe(gulpif(!isDevelopment, terser()))
    .pipe(gulpif(isDevelopment, sourcemaps.write()))
    .pipe(dest(scriptsPath.dest));
}
