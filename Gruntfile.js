module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // grunt uglify
    uglify: {

      build: {
        src: 'js/script.js',
        dest: 'js/script.min.js'
      }
    },
    // grunt-contrib-watch v1.1.0
    watch: {
      all: {
        files: ['sass/style.scss','css/style.css', 'js/script.js'],
        tasks: ['sass','csslint','jshint'],

      },
    },
    // grunt-contrib-csslint v2.0.0
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['css/*.css','!*.min.css']//do not include min files
      },
      lax: {
        options: {
          import: false
        },
        src: ['css/*.css','!*.min.css']
      }
    },

    // grunt-contrib-sass
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'css/style.css': 'sass/style.scss'    // 'destination': 'source'
        },
      },
    },
    // grunt-contrib-jshint
    jshint: {
      all: ['Gruntfile.js', 'js/script.js']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['watch']);

};
