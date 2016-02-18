/*
 * grunt-copytotheplace
 * https://github.com/sirbrillig/grunt-copytotheplace
 *
 * Copyright (c) 2016 Payton Swick
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    env: {
      doCopy: {
        COPYTOTHEPLACE: 'tmp'
      },
    },

    // Configuration to be run (and then tested).
    copytotheplace: {
      doCopy: ['test/fixtures/copyplease'],
      noCopy: ['test/fixtures/donotcopy']
    },

    simplemocha: {
      src: ['test/copytotheplace-test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-simple-mocha');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'copytotheplace:noCopy', 'env:doCopy', 'copytotheplace:doCopy', 'simplemocha']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
