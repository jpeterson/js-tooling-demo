/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: 'bower_components'
        }
      }
    },

    stylus: {
      compile: {
        files: {
          'main.css': 'main.styl'
        }
      }
    },

    copy: {
      main: {
        files: [{
          expand: true,
          src: [
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/jquery/dist/jquery.min.js',
            'lib/*'
          ],
          dest: 'dist/lib',
          flatten: true
        }, {
          expand: true,
          src: [
            'app.js',
            'main.css',
            'index.html'
          ],
          dest: 'dist/',
          flatten: false
        }]
      }
    },

    watch: {
      css: {
        files: '**/*.styl',
        tasks: ['stylus']
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['stylus', 'copy']);
  grunt.registerTask('default', ['watch']);
};