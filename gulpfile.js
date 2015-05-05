var gulp    = require('gulp')
  , gutil   = require('gulp-util')
  , webpack = require('webpack')

gulp.task('webpack', function(callback) {

  webpack({


  }, function(err, stats) {
    if(err) throw new gutil.Plugin('webpack', err);
    gutil.log('[webpack]', stats.toString({


    }));
    callback();
  });

});

gulp.task('default', function() {

});