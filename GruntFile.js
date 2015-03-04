module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			files: ['src/js/**/*.js'],
			options: {
				jshintrc: true
			}
		},
		uglify: {
			scripts: {
				options: {
					sourceMap: true
				},
				files: [
					{
						expand: true,
						cwd: 'dist/js/',
						src: ['**/*.js'],
						dest: 'dist/js/',
						ext: '.min.js'
					},
				]
			}
		},
		clean: {
			template: ['dist/js/templates', 'src/js/templates.js']
		},
		watch: {
			scripts: {
				files: ['src/templates/**/*.html'],
				tasks: ['template'],
				options: {
					spawn: false,
				},
			},
			less: {
				files: ['src/style/**/*.less'],
				tasks: ['less'],
				options: {
					spawn: false,
				},
			}
		},
		hogan: {
			custombinder : {
				src : './app/HoganCustomBinder/es6.hogan',
				dest : './app/HoganCustomBinder/es6.js',
				options: { binderName: 'bootstrap' }
			},

			// standTemplates: {
			// 	files: [
			// 		{
			// 			expand: true,
			// 			cwd: 'src/js/Template/',
			// 			src: ['**/*.html'], //'!main.html'
			// 			dest: 'dist/js/templates',
			// 			ext: '.js'
			// 		},
			// 	],
			// 	options: { binderPath: __dirname + '/app/HoganCustomBinder/es6.js', binderName: 'es6' }
			// },

			defaultTemplates: {
				// if add template here, remove from standTemplates
				src: ['src/templates/**/*.html'],
				dest: 'src/js/templates.js',
				options: { binderPath: __dirname + '/app/HoganCustomBinder/es6.js', binderName: 'es6' }
			}
		},
		less: {
			dev: {
				files: [
					{
						expand: true,
						cwd: 'src/style/',
						src: ['**/*.less'],
						dest: 'dist/css',
						ext: '.css'
					},
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-hogan');

	grunt.registerTask('template', ['clean:template', 'hogan']);

	grunt.registerTask('default', ['jshint', 'template']);


};