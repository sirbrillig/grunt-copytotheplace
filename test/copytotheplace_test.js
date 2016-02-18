'use strict';

var grunt = require('grunt');
var chai = require('chai');

var expect = chai.expect;

describe('copytotheplace', function() {
 it('does not copy any files if the COPYTOTHEPLACE env variable is not set', function() {
   expect(grunt.file.exists('tmp/donotcopy')).to.not.be.ok;
 });

 it('copies the files to the location in the COPYTOTHEPLACE env variable', function() {
   var actual = grunt.file.read('tmp/copyplease');
   var expected = grunt.file.read('test/fixtures/copyplease');
   expect(actual).to.equal(expected);
 });
});
