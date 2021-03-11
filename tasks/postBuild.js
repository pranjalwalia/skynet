const gulp = require('gulp');
const run = require('gulp-run');

const bundleViews = (cb) => {
    gulp.src(['src/views/**/*'], {
        base: 'src',
    }).pipe(gulp.dest('dist'));
    cb();
};

gulp.task('postbuild', bundleViews);
module.exports = bundleViews;
