const gulp = require('gulp');
const del = require('del');

const cleanup = (cb) => {
    del('uploads/**', { force: true });
    cb();
};

gulp.task('dev:cleanup', cleanup);
module.exports = cleanup;
