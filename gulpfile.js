'use strict';

var gulp = require('gulp');
var electron = require('electron-connect').server.create();
var ts = require('gulp-typescript');


gulp.task('default', function () {

  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch('main.js', electron.restart);

  // Reload renderer process
  gulp.watch(['app/**/*.js', 'app/**/*.html'], electron.reload);
});