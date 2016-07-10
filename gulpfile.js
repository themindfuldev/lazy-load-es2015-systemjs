var gulp = require('gulp');
var mocha = require('gulp-mocha');
var connect = require('gulp-connect');
require('babel-core/register');

gulp.task('default', ['connect']);

gulp.task('test', function() {
  return gulp.src('test/*.js')
    .pipe(mocha())
    .on('error', function() {
      gulp.emit('end');
    });
});

//jspm bundle-sfx src/main.js target/main.bundle.js
//jspm bundle src/zoo.js target/1.bundle.js --inject

gulp.task('connect', ['test'], function() {
  connect.server({
    root: '.'
  });
});