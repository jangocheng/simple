var path = require('path');
var gulp = require('gulp');

gulp.task('connect',function(){
    connect.server({
        root: './',
        port: 9001
    })
});
