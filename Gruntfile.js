module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // }
    // grunt-contrib-watch v1.1.0
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      },
    },
    // grunt-contrib-csslint v2.0.0
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['css/style.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['css/style.css']
      },
    },
    // grunt-w3c-html-validation
    //     validation: {
    //     options: {
    //         reset: grunt.option('reset') || false,
    //         stoponerror: false,
    //         remotePath: 'http://decodize.com/',
    //         remoteFiles: ['html/moving-from-wordpress-to-octopress/',
    //                       'css/site-preloading-methods/'], //or
    //         remoteFiles: 'validation-files.json', // JSON file contains array of page paths.
    //         relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'], //ignores these errors
    //         generateReport: true,
    //         errorHTMLRootDir: "w3cErrorFolder",
    //         useTimeStamp: true,
    //         errorTemplate: "w3c_validation_error_Template.html"
    //     },
    //     files: {
    //         src: ['<%= yeoman.app %>/*.html',
    //               '!<%= yeoman.app %>/index.html',
    //               '!<%= yeoman.app %>/modules.html',
    //               '!<%= yeoman.app %>/404.html']
    //     }
    // },
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
      all: ['Gruntfile.js', 'js/*.js']
    }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  // grunt.loadNpmTasks('grunt-w3c-html-validation');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  // grunt.registerTask('default', ['uglify']); 'validation',
  grunt.registerTask('default', ['watch','csslint','sass','jshint']);

};
