import gulp from 'gulp';
import path from 'path';
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';

const { src, dest } = gulp;

const imagesPath = {
  src: 'src/img/*.{gif,png,jpg,svg}',
  dest: 'build/img',
};

export default function minifyImages() {
  return src(imagesPath.src)
    .pipe(
      imagemin([
        gifsicle({ interlaced: true }),
        mozjpeg({ quality: 75, progressive: true }),
        optipng({ optimizationLevel: 5 }),
        svgo({
          plugins: [
            { name: 'removeViewBox', active: true },
            { name: 'cleanupIDs', active: false },
          ],
        }),
      ])
    )
    .pipe(
      dest(function (file) {
        file.path = path.join(file.base, file.basename);

        return imagesPath.dest;
      })
    );
}
