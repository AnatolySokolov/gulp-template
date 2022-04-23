import gulp from 'gulp';
import sprite from 'gulp-svg-sprite';
import svgmin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';

const { src, dest } = gulp;

const svgSpritePath = {
  src: 'src/img/sprite/*.svg',
  dest: 'src/img/sprite',
};

const config = {
  mode: {
    symbol: {
      prefix: '.icon--%s',
      dimensions: '%s',
      sprite: '../sprite.svg',
      render: {
        scss: {
          dest: '../svgSprite.scss',
        },
      },
    },
  },
};

export default function svgSprite() {
  return src(svgSpritePath.src)
    .pipe(
      svgmin({
        js2svg: { pretty: true },
      })
    )
    .pipe(
      cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parseOptions: { xmlMode: true },
      })
    )
    .pipe(replace('&gt', '>'))
    .pipe(sprite(config))
    .pipe(dest(svgSpritePath.dest));
}
