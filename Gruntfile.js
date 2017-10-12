module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/onyx.css": "less/onyx.less"
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist',
          ext: '.min.css'
        }]
      }
    },
    uglify:{
      options: {
        mangle:{
          toplevel: true
        },
        compress: true,
        beautify: false
      },
      target:{
        files:{
          "dist/onyx.min.js":["js/onyx.js"]
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'],
        tasks: ['less','cssmin'],
        options: {
          nospawn: true
        }
      },
      scripts:{
        files: ['js/**/*.js'],
        tasks: ['uglify'],
        options: {
          nospawn: true
        }
      }
    }
  });
  grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'watch']);
};