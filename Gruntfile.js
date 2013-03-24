module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    specFiles: 'spec/**/*.spec.js',
    srcFiles: 'src/**/*.js',
    
    watch: {
      files: ['Gruntfile.js', 'spec/**/*.spec.js', 'src/**/*.js'],
      tasks: 'jshint'
    },

    jshint: {
      jshintrc: '.jshintrc',
      all: ['Gruntfile.js', 'spec/**/*.spec.js', 'src/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);
};
