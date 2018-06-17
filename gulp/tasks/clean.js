import gulp from 'gulp';
import clean from 'gulp-clean';
import config from '../config';

gulp.task('clean', () => {
  // Option read:false prevents gulp from reading the contents of the file and makes this task a lot faster
  return gulp.src(config.buildDir, { read: false }).pipe(clean());
});
