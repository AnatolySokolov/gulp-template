import gulp from 'gulp';
import gulpWebp from 'gulp-webp';
import flatten from 'gulp-flatten';

const { src, dest } = gulp;

const webpImagesPath = {
  src: 'src/img/*.{png,jpg}',
  dest: 'build/img',
};

export default function webp() {
  return src(webpImagesPath.src)
    .pipe(gulpWebp({ quality: 75 }))
    .pipe(flatten())
    .pipe(dest(webpImagesPath.dest));
}
