var gulp = require('gulp');
// var babel = require('gulp-babel');
// var mocha = require('gulp-mocha');
var connect = require('gulp-connect');

gulp.task('default', ['connect']);

gulp.task('babel', function() {
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('app/js'));
});

gulp.task('test', ['babel'], function() {
  return gulp.src('test/*.js')
    //.pipe(babel())
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