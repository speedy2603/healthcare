// ---
// COMPRESSJS TASK
// (puts files together, minifies and saves as 'scripts.min.js')
// ---

// plugins
var gulp = require('gulp');

var config = require('../config').destcss;

//task
gulp.task('destjs', function() {
    gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});
