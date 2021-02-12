const gulp = require('gulp');
const run = require('gulp-run');
const { exec } = require('child_process');

const rundev = (cb) => {
    run('yarn dev').exec();
    cb();
};

gulp.task('dev', rundev);
module.exports = rundev;
