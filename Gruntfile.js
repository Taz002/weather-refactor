/*

Run 'grunt' to set up dist
Run 'grunt watch' to automatically update dist while modifying

*/

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
      options: {
        separator: ''
      },
      dist: {
        src: ['app/app.module.js', 'app/*.js', 'app/shared/*.js', 'app/**/*.module.js', 'app/**/*.js', '!app/*.min.js', '!app/**/*.min.js'],
        dest: 'dist/app.js'
      }
    },
    
    copy: {
      files: {
        cwd: 'app',
        src: '**/*.html',
        dest: 'dist/views/',
        expand: true,
        flatten: true,
        filter: 'isFile'
      }
    },
    
    watch: {
      scripts: {
        files: ['app/*', 'app/**/*'],
        tasks: ['concat', 'copy'],
        options: {
          spawn: false
        }
      }
    }
  });
  
//  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.registerTask('default', ['concat', 'copy']);
};