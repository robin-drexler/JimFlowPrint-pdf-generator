// Gulpfile.js
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('dev', function () {
  nodemon({ script: 'index.js', ext: 'js'})
    .on('restart', function () {
      console.log('restarted!')
    })
});