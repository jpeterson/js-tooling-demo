/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	// Project configuration
	grunt.initConfig({
		copy: {
			main: {
				files: [{
					expand: true,
					src: [
						'index.html',
						'samples/**',
						'!**/node_modules/**'
					],
					dest: 'dist/',
					flatten: false
				}]
			}
		},

		'gh-pages': {
			options: {
				base: 'dist'
			},
			src: ['**']
		}

	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.registerTask('deploy', ['copy', 'gh-pages']);

};