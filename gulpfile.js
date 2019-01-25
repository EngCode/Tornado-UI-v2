/*================================
=                                =
=  - Tornado v2                  =
=  - Userinterface Framework     =
=  - by Abdullah Ramadan         =
=  - http://eng-code.com         =
=  - Open Source Framework       =
=                                =
================================*/

/*jslint browser:true */
/*jslint node: true */

/*====== Requiers Tools ======*/
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    minifyjs = require('gulp-uglify-es').default;
/*====== Compile Sass ======*/
gulp.task('tornado-sass', function () {
    'use strict';
    return gulp.src('src/SCSS/*.scss')
        // Compile Sass
        .pipe(sass().on('error', sass.logError))
        // Minify CSS
        .pipe(minifyCSS())
        // Rename CSS
        .pipe(rename({suffix: '.min'}))
        // Build The CSS
        .pipe(gulp.dest('dist/css'));
});
/*====== Javascript Build ======*/
gulp.task('tornado-js', function () {
    'use strict';
    return gulp.src('src/javascript/*.js')
        // Merge Files
        .pipe(concat('tornado.min.js'))
        // Minify Javascript
        .pipe(minifyjs())
        // Build The Javascript
        .pipe(gulp.dest('dist/js'));
});

/*====== Build Tornado ======*/
gulp.task('build-tornado', gulp.series(gulp.parallel('tornado-sass', 'tornado-js'), function () {
    'use strict';
    /*====== Copy Tornado to Docs ======*/
    return gulp.src('dist/js/*.js', 'dist/css/*.css').pipe(gulp.dest('docs/assets/'));
}));