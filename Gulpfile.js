// Gulpfile.js
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
var sass = require('gulp-sass');

gulp.task('dev', function () {
  nodemon({ script: 'index.js', ext: 'js'})
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('test', function() {
  return gulp.src('tests/*.js', {read: false})
    .pipe(mocha());
});




sources = {
  sass: "views/**/*.{sass,scss}"
};
destinations = {
  css: "views/"
};


gulp.task('sass', function () {
    return gulp.src(sources.sass)
        .pipe(sass())
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest(destinations.css));
});

gulp.task("watch", function() {
  gulp.watch(sources.sass, ["sass"]);
});



gulp.task("default", [
  "sass",
  "watch",
  "dev"
]);