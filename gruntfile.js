module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    sass: {
      dist: {
        files: {
          'css/style.css' : 'sass/style.scss'
        }
      }
    },

    concat: {
       options: {
         separator: '',
       },
       dist: {
         src: ['js/document.ready.ugly.js', 'js/window.resize.ugly.js', 'js/_variables.ugly.js', 'js/_interface.ugly.js'],
         dest: 'js/bundle.min.js',
       },
     },


    uglify: {
      dist: {
        files: {
          'js/document.ready.ugly.js' : 'js/document.ready.js',
          'js/window.resize.ugly.js' : 'js/window.resize.js',
          'js/_variables.ugly.js' : 'js/_variables.js',
          'js/_interface.ugly.js' : 'js/_interface.js',
        }
      }
    },



    watch: {
      css: {
        files: ['sass/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
      js: {
        files: ['js/*.js'],
        tasks: ['uglify','concat'],
        options: {
          livereload: true,
        },
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ["sass","uglify","concat"]);
  // grunt.registerTask('default', function(){
  //   grunt.log.writeln("All files have been compiled");
  // });
}
