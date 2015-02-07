'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
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
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      source: {
        src: [
          'Gruntfile.js',
          'src/loading-dots.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/loading-dots.js']
      }
    }
  });

  grunt.registerTask('build', [
    'jshint:source',
    'uglify'
  ]);

  grunt.registerTask('test', [
    'jshint:test',
    'karma'
  ]);

};
