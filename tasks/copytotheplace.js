/*
 * grunt-copytotheplace
 * https://github.com/sirbrillig/grunt-copytotheplace
 *
 * Copyright (c) 2016 Payton Swick
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var copytotheplace = require('copytotheplace').copytotheplace;

  grunt.registerMultiTask('copytotheplace', 'Copy files to the directory specified in the COPYTOTHEPLACE environment variable.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});

    var done = this.async();

    // Copy the files
    copytotheplace(this.filesSrc)
    .then( done );
  });

};
