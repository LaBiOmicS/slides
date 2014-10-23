/* global module:false */
module.exports = function(grunt) {
    var port = grunt.option('port') || 8000;

    // Load grunt tasks automatically, when needed
    require("jit-grunt")(grunt);

    //Time how long tasks take. Can help when optimizing build times
    require("time-grunt")(grunt);

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        config: {
            buildDir: './dist'
        },

        meta: {
            banner:
                '/*!\n' +
                ' * reveal.js <%= pkg.version %>\n' +
                ' * http://lab.hakim.se/reveal-js\n' +
                ' * MIT licensed\n' +
                ' *\n' +
                ' * Copyright (C) 2013 Hakim El Hattab, http://hakim.se\n' +
                ' */'
        },

        qunit: {
            files: [ 'test/*.html' ]
        },

        uglify: {
            options: {
                banner: '<%= meta.banner %>\n'
            },
            build: {
                src: 'js/reveal.js',
                dest: 'js/reveal.min.js'
            }
        },

        cssmin: {
            compress: {
                files: {
                    'css/reveal.min.css': [ 'css/reveal.css' ],
                    'css/bootstrap-superhero.min.css': [ 'css/bootstrap-superhero.css' ]
                }
            }
        },

        sass: {
            main: {
                files: {
                    'css/theme/default.css': 'css/theme/source/default.scss',
                    'css/theme/beige.css': 'css/theme/source/beige.scss',
                    'css/theme/night.css': 'css/theme/source/night.scss',
                    'css/theme/serif.css': 'css/theme/source/serif.scss',
                    'css/theme/simple.css': 'css/theme/source/simple.scss',
                    'css/theme/sky.css': 'css/theme/source/sky.scss',
                    'css/theme/moon.css': 'css/theme/source/moon.scss',
                    'css/theme/solarized.css': 'css/theme/source/solarized.scss',
                    'css/theme/blood.css': 'css/theme/source/blood.scss'
                }
            }
        },

        jshint: {
            options: {
                curly: false,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                eqnull: true,
                browser: true,
                expr: true,
                globals: {
                    head: false,
                    module: false,
                    console: false,
                    unescape: false,
                    require: false
                }
            },
            files: [ 'Gruntfile.js', 'js/reveal.js' ]
        },

        connect: {
            server: {
                options: {
                    port: port,
                    hostname: '*',
                    base: ['.', 'slides'],
                    directory: 'slides',
                    open: {
                        target: 'http://localhost:8000/slides', // target url to open
                        appName: 'xdg-open' // name of the app that opens, ie: open, start, xdg-open
                    }
                }
            }
        },

        zip: {
            'reveal-js-presentations.zip': [
                '<%= config.buildDir %>/**'
            ]
        },

        watch: {
            main: {
                files: [ 'Gruntfile.js', 'js/reveal.js', 'css/reveal.css', 'slides/**' ],
                tasks: 'default'
            },
            theme: {
                files: [ 'css/theme/source/*.scss', 'css/theme/template/*.scss' ],
                tasks: 'themes'
            }
        },

        copy: {
            main: {
                files: [
                    //copy all the dependencies
                    {expand: true, src: ['css/**', 'js/**', 'lib/**', 'plugin/**'], dest: '<%= config.buildDir %>'},
                    //copy the slides folder
                    {expand: true, src: ['slides/**'], dest: '<%= config.buildDir %>'}
                ]
            }
        },

        jade: {
            index: {
                options: {
                    pretty: true,
                    data: function() {
                        return require('./slides/slides.json');
                    }
                },
                files: {
                    '<%= config.buildDir %>/index.html': ['templates/index.jade']
                }
            }
        }

    });

    // Default task
    grunt.registerTask( 'default', [ 'jshint', 'cssmin', 'uglify', 'qunit' ] );

    // Theme task
    grunt.registerTask( 'themes', [ 'sass' ] );

    // Package presentation to archive
    grunt.registerTask( 'package', [ 'default', 'copy', 'zip' ] );

    // Serve presentation locally
    grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

    // Run tests
    grunt.registerTask( 'test', [ 'jshint', 'qunit' ] );

    // @deprecated
    grunt.registerTask( 'export', function() {
        grunt.log.warn('"export" task is deprecated. Use "build".');
        grunt.task.run(['build']);
    });

    // Build for publising (on gh-pages, for example)
    grunt.registerTask( 'build', [ 'default', 'copy', 'jade' ]);
};
    
