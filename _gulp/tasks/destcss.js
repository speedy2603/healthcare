// ---
// COMPRESSJS TASK
// (puts files together, minifies and saves as 'scripts.min.js')
// ---

// plugins
var gulp = require('gulp');

var config = require('../config').destcss;

//task
gulp.task('destcss', function() {
    gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});
