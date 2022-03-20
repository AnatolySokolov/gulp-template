import gulp from 'gulp';
import spritesmith from 'gulp.spritesmith';

const { src, dest } = gulp;

const pngSpritePath = {
  src: 'src/img/sprite/*.png',
  dest: 'src/img/sprite',
};

export default function pngSprite() {
  return src(pngSpritePath.src)
    .pipe(
      spritesmith({
        imgName: 'sprite.png',
        cssName: 'pngSprite.scss',
        imgOpts: {
          quality: 70,
        },
        imgPath: 'img/sprite.png',
      })
    )
    .pipe(dest(pngSpritePath.dest));
}
