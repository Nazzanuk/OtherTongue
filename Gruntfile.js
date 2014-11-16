module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower_concat: {
            all: {
                dest: 'dist/bower.js',
                cssDest: 'dist/bower.css',
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
        concat: {
            options: {
                separator: '\n\n'
            },
            basic_and_extras: {
                files: {
                    'dist/app.js': ['app/components/app.js','app/components/**/*.js'],
                    'dist/index.html': ['app/head.html','app/app.html','app/foot.html']
                }
            }
        },
        //qunit: {
        //    files: ['test/**/*.html']
        //},
        //jshint: {
        //    files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        //    options: {
        //        // options here to override JSHint defaults
        //        globals: {
        //            jQuery: true,
        //            console: true,
        //            module: true,
        //            document: true
        //        }
        //    }
        //},
        watch: {
            files: ['app/**/*.*', 'Gruntfile.js'],
            tasks: ['default']
        }
    });

    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-bower-concat');

    //grunt.registerTask('test', ['jshint', 'qunit']);

    grunt.registerTask('default', ['bower_concat','concat']);
    grunt.registerTask('dev', ['default', 'watch']);

};