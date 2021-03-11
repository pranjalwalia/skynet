const gulp = require('gulp');
const requireDir = require('require-dir');
requireDir('./tasks', { recurse: true });

gulp.task('dev:pipeline', gulp.series('dev:cleanup'));

//todo: complete build script, use series
gulp.task('build', gulp.series('buildServer'));
