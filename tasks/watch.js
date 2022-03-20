import gulp from 'gulp';
import pug2html from './pug2html.js';
import styles from './styles.js';
import scripts from './scripts.js';
import server from 'browser-sync';

const { series, watch } = gulp;

const watchPath = {
  pug: ['src/pug/**/*.pug'],
  styles: ['src/styles/*.scss', 'src/styles/**/*.scss'],
  scripts: ['src/scripts/*.js', 'src/scripts/**/*.js'],
};

const serverConfig = {
  server: 'build',
  // browser: ['google chrome', 'firefox', 'opera', 'iexplore'],
  // browser: 'opera',
  notify: false,
  // open: true,
  // cors: true,
};

const reload = (done) => {
  server.reload();
  done();
};

server.create();

export default function (cb) {
  server.init(serverConfig);
  watch(watchPath.pug, series(pug2html, reload));
  watch(watchPath.styles, series(styles, reload));
  watch(watchPath.scripts, series(scripts, reload));

  return cb();
}
