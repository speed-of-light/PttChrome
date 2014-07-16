module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/<%= pkg.name %>.concat.js',
        dest: 'js/<%= pkg.name %>.min.js'
      }
    },
    concat: {
      options: {
        process: function(src, filepath) {
          return '// Source: ' + filepath + '\n' + src;
        }
      },
      dist: {
        src: [
          'js/predefined_config.js', 
          'js/pref.js', 
          'js/emoticon.js',
          'js/app_conn.js', 
          'js/telnet.js', 
          'js/b2u_table.js',
          'js/u2b_table.js',
          'js/term_buf.js', 
          'js/term_view.js', 
          'js/ansi_parser.js',
          'js/symbol_table.js', 
          'js/pttchrome.js', 
          'js/string_util.js',
          'js/i18n.js',
          'js/en_US_messages.js',
          'js/zh_TW_messages.js',
          'js/main.js',
        ],
        dest: 'js/<%= pkg.name %>.concat.js',
      },
    },
    jshint: {
      files: [
          'js/predefined_config.js', 
          'js/pref.js', 
          'js/emoticon.js',
          'js/app_conn.js', 
          'js/telnet.js', 
          'js/b2u_table.js',
          'js/u2b_table.js',
          'js/term_buf.js', 
          'js/term_view.js', 
          'js/ansi_parser.js',
          'js/symbol_table.js', 
          'js/pttchrome.js', 
          'js/string_util.js',
          'js/i18n.js',
          'js/en_US_messages.js',
          'js/zh_TW_messages.js',
          'js/main.js',
        ],
      options: {
        // options here to override JSHint defaults
        shadow: true,
        esnext: true,
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};
