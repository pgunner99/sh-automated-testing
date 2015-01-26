module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['gruntfile.js', 'cucumber/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }

    },

    protractor: {
          options: {
            keepAlive: true,
            configFile: "protractor.conf.js"
          },
          singlerun: {},
          auto: {
            keepAlive: true,
            options: {
              args: {
                seleniumPort: 4444
              }
            }
          }
        },

    protractor_webdriver: {
          start: {
              options: {
                  path: 'node_modules/protractor/bin/',
                  command: 'webdriver-manager start'
              }
          }
      }
  });


  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.loadNpmTasks('grunt-protractor-webdriver');

  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('test', [
    'protractor:singlerun'
  ]);
};