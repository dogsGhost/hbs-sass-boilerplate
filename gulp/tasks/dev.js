import gulp from 'gulp';
import runSequence from 'run-sequence';

// build sg and start live-reloading for dev workflow
gulp.task('dev', () => {
  return runSequence('build', 'browserSync', 'watch');
});
