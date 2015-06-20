var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css');

gulp.task('minify-css', function () {
    return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.css', 'app/css/app.css'])
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(concat('min.css'))
        .pipe(gulp.dest('app/css/'));
});