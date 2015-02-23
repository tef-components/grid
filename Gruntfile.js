module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          optimization: 2
        },
        files: {
          'css/grid.css': 'less/grid.less'
        }
      },
      production: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          'css/grid.min.css': 'less/grid.less'
        }
      }
    },

    watch: {
      styles: {
        files: ['less/**/*.less'],
        tasks: ['less', 'autoprefixer'],
        options: {
          nospawn: true
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 5 versions']
      },
      dist: {
        src: 'css/*.css'
      },
    },
  });

  grunt.registerTask('default', ['less','autoprefixer','watch']);
};