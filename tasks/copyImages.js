import gulp from 'gulp';
import path from 'path';

const { src, dest, lastRun } = gulp;

const imagesPath = {
  src: ['src/img/*.{gif,png,jpg,svg,webp}'],
  dest: 'build/img',
};

export default function copyImages() {
  return src(imagesPath.src, { since: lastRun(copyImages) }).pipe(
    dest(function (file) {
      file.path = path.join(file.base, file.basename);

      return imagesPath.dest;
    })
  );
}
