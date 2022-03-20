import gulp from 'gulp';

const { src, dest } = gulp;

const copyPath = {
  src: [
    'src/fonts/**/*.{eot,ttf,svg,woff,woff2}',
    'src/favicons/*.{ico,png,jpg,svg}'
  ],
  dest: {
    fonts: 'build/fonts',
    favicons: 'build/img',
    default: 'build/img'
  }
};

export default function copy() {
  return src(copyPath.src)
    .pipe(dest(function(file) {
      const regexp = /(?<=\/src\/).+/i;
      const dirname = file.base.match(regexp).join('');

      switch(dirname) {
        case 'fonts':
          return copyPath.dest.fonts;
        case 'favicons':
          return copyPath.dest.favicons;
        default:
          return copyPath.dest.default;
      }
    }));
};
