module.exports = function (grunt) {
    // Project configuration.

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> | license: MIT | version: <%= pkg.version %> | build date: <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    'dist/element-data-store.min.js': ['src/element-data-store.js']
                }
            }
        },

        qunit: {
            all: ['test/**/*.html']
        },

        jshint: {
            all: ['src/element-data-store.js']
        }
    });

    // Default task(s)
    grunt.registerTask('default', ['uglify']);

    // Travis CI tests
    grunt.registerTask('travis', ['qunit', 'jshint']);
};