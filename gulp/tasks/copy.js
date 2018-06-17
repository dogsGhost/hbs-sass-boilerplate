import gulp from 'gulp';
import config from '../config';

gulp.task('copy:images', () => {
  return gulp.src([config.sourceDir + 'images/*']).pipe(gulp.dest(config.buildDir + 'images/'));
});

gulp.task('copy:js', () => {
  return gulp.src([config.sourceDir + 'js/*.js']).pipe(gulp.dest(config.buildDir + 'js/'));
});

gulp.task('copy:html', () => {
  return gulp.src([config.sourceDir + 'index.html']).pipe(gulp.dest(config.buildDir));
});

gulp.task('copy', ['copy:images', 'copy:js', 'copy:html']);
