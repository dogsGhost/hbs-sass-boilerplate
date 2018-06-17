import browserSync from 'browser-sync';
import gulp from 'gulp';
import config from '../config';

// start up browser sync for development
gulp.task('browserSync', () => {
  browserSync.init({
    ghostMode: {
      links: false
    },
    server: {
      baseDir: config.buildDir
    }
  });
});
