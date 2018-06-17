import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import config from '../config';

gulp.task('sass', () => {
  gulp
    .src(config.sourceDir + config.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
    .pipe(
      autoprefixer({
        // see https://github.com/ai/browserslist#queries for more than just the last 2 versions of browsers
        browsers: ['last 2 versions'],
        cascade: false
      })
    )
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(config.buildDir + config.styles.dest));
});
