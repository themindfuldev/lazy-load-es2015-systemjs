var gulp = require('gulp');
var mocha = require('gulp-mocha');
var connect = require('gulp-connect');
require('babel-core/register');

gulp.task('test', function() {
  return gulp.src('test/*.js')
    .pipe(mocha())
    .on('error', function() {
      gulp.emit('end');
    });
});

gulp.task('connect', function() {
  connect.server({
    root: '.'
  });
});