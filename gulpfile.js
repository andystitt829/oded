var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var zip = require('gulp-zip');

gulp.task('sass', function(){
  return gulp.src('sass/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest(''))
});

gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('delbuild', function() {
  return del('oded/**');
});

gulp.task('move', function() {
  console.log("Moving all files in styles folder");

  gulp.src('**')
    .pipe(gulp.dest('oded'));
});

gulp.task('clean', function() {
  return del([
    'oded/.**',
    'oded/bower_components',
    'oded/node_modules',
    'oded/sass',
    'oded/vendor',
    'oded/wpcs',
    'oded/bower.json',
    'oded/composer.**',
    'oded/gulpfile.js',
    'oded/oded.zip',
    'oded/package.json'
  ]);
});

gulp.task('zip', function() {
    return gulp.src('oded/**/**/**')
        .pipe(zip('oded.zip'))
        .pipe(gulp.dest('./'));
});
