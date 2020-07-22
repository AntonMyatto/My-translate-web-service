const gulp = require('gulp');
const sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./styles/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/css/'));
});
 
