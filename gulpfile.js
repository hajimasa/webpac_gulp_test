var gulp = require('gulp');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');

const webpackConfig = require('./webpack.config');

//gulp webpackで実行
gulp.task('webpack', function() {
  return webpackStream(webpackConfig, webpack)
  .pipe(gulp.dest('./')); 
});

//変更監視
gulp.task('watch', function(){
    gulp.watch('./src/js/**/*.js', ['webpack']);
});
