module.exports = function (grunt) {


    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower_concat: {
            all: {
                dest: '.tmp/bower.js',
                cssDest: '.tmp/bower.css',
                exclude: [],
                dependencies: {
                    'underscore': 'jquery',
                    'bootstrap': 'jquery',
                    'angular': 'jquery',
                    'velocity': 'jquery'
                },
                bowerOptions: {
                    relative: false
                }
            }
        },
        clean: {
            all: ["dist", ".tmp"]
        },
        compass: {                  // Task
            dist: {                   // Target
                options: {              // Target options
                    sassDir: 'app',
                    cssDir: '.tmp'
                }
            }
        },
        concat: {
            options: {
                separator: '\n\n'
            },
            basic_and_extras: {
                files: {
                    'dist/app.js': ['app/app.js', 'app/components/**/*.js'],
                    'dist/bower.js': ['.tmp/bower.js'],
                    'dist/index.html': ['app/head.html', 'app/app.html', 'app/components/**/*.html', 'app/foot.html'],
                    'dist/app.css': ['.tmp/bower.css', '.tmp/app.css']
                }
            }
        },
        watch: {
            files: ['app/components/**/*.*', 'app/app.js', 'Gruntfile.js'],
            tasks: ['default'],
            options: {
                livereload: true,
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'app/bower-components/fontawesome/fonts', src: ['**/*.*'], dest: 'dist/fonts/'},

                ]
            }
        }
    });

    grunt.registerTask('default', ['clean', 'compass', 'bower_concat', 'concat', 'copy']);
    grunt.registerTask('dev', ['default', 'watch']);

};