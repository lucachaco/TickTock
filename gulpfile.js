var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify');

gulp.task('minify-css', function () {
    return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.css', 'app/css/app.css'])
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(concat('min.css'))
        .pipe(gulp.dest('app/css/'));
});


gulp.task('uglify-js', function () {
    return gulp.src(['bower_components/angular/angular.js', 'app/js/app.js', 'app/js/controllers.js'])
        .pipe(uglify())
        .pipe(concat('min.js'))
        .pipe(gulp.dest('app/js/'));
});


gulp.task('default', ['minify-css', 'uglify-js'], function () {
});