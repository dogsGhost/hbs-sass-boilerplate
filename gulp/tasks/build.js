import gulp from 'gulp';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';

// compile the whole styleguide from scratch
gulp.task('build', cb => {
  cb = cb || function () {};
  return runSequence('clean', 'sass', 'copy', 'hbs', () => {
    browserSync.reload();
    cb();
  });
});
