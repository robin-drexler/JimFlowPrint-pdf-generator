// Gulpfile.js
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');

gulp.task('dev', function () {
  nodemon({ script: 'index.js', ext: 'js'})
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('tests', function() {
  return gulp.src('tests/*.js', {read: false})
    .pipe(mocha());
});