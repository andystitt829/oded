var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('sass', function(){
  return gulp.src('sass/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest(''))
});

gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('delbuild', function() {
  return del('build/**');
});

gulp.task('move', function() {
  console.log("Moving all files in styles folder");

  gulp.src('**')
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function() {
  return del([
    'build/.**',
    'build/node_modules',
    'build/sass',
    'build/vendor',
    'build/composer.**',
    'build/gulpfile.js',
    'build/package.json'
  ]);
});
