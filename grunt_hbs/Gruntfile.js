module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: 'app/**/*.js',
        tasks: ['browserify'],
        options: {
          interrupt: true
        }
      },
      templates: {
        files: 'app/**/*.hbs',
        tasks: ['handlebars'],
        options: {
          interrupt: true
        }
      }
    },

    handlebars: {
      compile: {
        options: {
          namespace: function(ns) {
            console.log(ns);
            return "views";
          },
          wrapped: true,
          commonjs: true,
          processName: function(filename) {
            return filename.replace('app/templates/', '').replace('.hbs', '');
          }
        },
        files: {
          'app/templates/compiledTemplates.js': ['app/templates/**/*.hbs']
        }
      }
    },

    browserify: {
      dist: {
        files: { 
          'static/bundle.js': [ 'app/main.js' ]
        },
        options: {
          transform: ['brfs']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('runNode', function () {
    grunt.util.spawn({
      cmd: 'node',
      args: ['./node_modules/.bin/nodemon', 'server.js'],
      opts: {
        stdio: 'inherit'
      }
    }, function () {
      grunt.fail.fatal(new Error("nodemon quit"));
    });
  });


  grunt.registerTask('compile', ['handlebars', 'browserify']);

  // Run the server and watch for file changes
  grunt.registerTask('server', ['compile', 'runNode', 'watch']);

  // Default task(s).
  grunt.registerTask('default', ['compile']);

};
