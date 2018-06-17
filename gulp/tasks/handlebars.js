import gulp from 'gulp';
import concat from 'gulp-concat';
import shell from 'gulp-shell';
import config from '../config';
import runSequence from 'run-sequence';

gulp.task('hbs:helpers', () => {
  return gulp
    .src(config.sourceDir + 'helpers/*.js')
    .pipe(concat('hbs-helpers.js'))
    .pipe(gulp.dest(config.buildDir + 'js/'));
});

gulp.task('hbs:partials', () => {
  return gulp.src('', { read: false })
    .pipe(shell(['handlebars <%= input %> -pf <%= output %> -m'], {
      templateData: {
        input: config.sourceDir + 'hbs',
        output: config.buildDir + 'js/hbs-partials.js'
      }
    }));
});

gulp.task('hbs', cb => {
  cb = cb || function () { };
  return runSequence('hbs:helpers', 'hbs:partials', cb);
});

