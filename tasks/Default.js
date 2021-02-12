const gulp = require('gulp');

const defaultTask = (cb) => {
    console.log('Running the Default Task!');
    cb();
};

gulp.task('default', defaultTask);
module.exports = defaultTask;
