import gulp from 'gulp';
import concat from 'gulp-concat';
import config from '../config';
import sourcemaps from 'gulp-sourcemaps';

// styleguide scripts
gulp.task('js:sg', () => {
  return gulp
    .src(config.sourceDir + config.scripts.sg_main)
    .pipe(sourcemaps.init())
    .pipe(concat('styleguide.js'))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(config.buildDir + config.scripts.dest));
});

// prototype scripts
gulp.task('js:ut', () => {
  return gulp
    .src(config.sourceDir + config.scripts.ut_main)
    .pipe(sourcemaps.init())
    .pipe(concat('prototypes.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(config.buildDir + config.scripts.dest));
});

// component-specific scripts
gulp.task('js:components', () => {
  return gulp
    .src(config.sourceDir + config.scripts.components)
    .pipe(sourcemaps.init())
    .pipe(concat('components.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(config.buildDir + config.scripts.dest));
});

// third-party scripts
gulp.task('js:vendor', () => {
  return gulp
    .src(config.scripts.vendor)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(config.buildDir + config.scripts.dest));
});

gulp.task('js', ['js:vendor', 'js:sg', 'js:ut', 'js:components']);
