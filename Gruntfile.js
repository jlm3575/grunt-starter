module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: ['build', 'dist'],
      release: ['build']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    }, uglify: {
      release : {
        src : 'src/js/**/*.js',
        dest : 'dist/<%= pkg.name %>.min.js'
      }
    }, less: {
      release: {
        src: 'src/less/**/*.less',
        dest: 'build/css/<%= pkg.name %>.css'
      }
    }, cssmin: {
      release: {
        src : 'build/css/<%= pkg.name %>.css',
        dest : 'dist/<%= pkg.name %>.min.css'
      }
    }, concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['build/**/*.min.js'],
        dest: 'dist/<%= pkg.name %>.js'
      },
      css: {
        src: ['build/**/*.min.css'],
        dest: 'dist/<%= pkg.name %>.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['clean:build','jshint','uglify','less','cssmin','clean:release']);
};
