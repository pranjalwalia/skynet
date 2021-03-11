const gulp = require('gulp');
const run = require('gulp-run');
const { exec } = require('child_process');

const buildServer = (cb) => {
    run('yarn build').exec();
    cb();
};

gulp.task('buildServer', buildServer);
module.exports = buildServer;
