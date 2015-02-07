'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    uglify: {
      target: {
        files: {
          'dist/loading-dots.min.js': ['src/loading-dots.js']
        }
      }
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    }
  });

  grunt.registerTask('build', [
    'uglify'
  ]);

  grunt.registerTask('test', [
    'karma'
  ]);

};
