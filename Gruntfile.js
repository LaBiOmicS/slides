/* global module:false */
module.exports = function(grunt) {
    var port = grunt.option('port') || 8000;

    // Load grunt tasks automatically, when needed
    require("jit-grunt")(grunt, {
        buildcontrol: 'grunt-build-control'
    });

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
                ' * reveal.js <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
                ' * http://lab.hakim.se/reveal-js\n' +
                ' * MIT licensed\n' +
                ' *\n' +
                ' * Copyright (C) 2015 Hakim El Hattab, http://hakim.se\n' +
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

        sass: {
            core: {
                files: {
                    'css/reveal.css': 'css/reveal.scss',
                }
            },
            themes: {
                files: {
                    'css/theme/black.css': 'css/theme/source/black.scss',
                    'css/theme/white.css': 'css/theme/source/white.scss',
                    'css/theme/league.css': 'css/theme/source/league.scss',
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

        autoprefixer: {
            dist: {
                src: 'css/reveal.css'
            }
        },

        cssmin: {
            compress: {
                files: {
                    'css/reveal.min.css': [ 'css/reveal.css' ]
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
                    require: false,
                    define: false,
                    exports: false
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
                    livereload: true,
                    open: true
                }
            }
        },

        zip: {
            'reveal-js-presentations.zip': [
                '<%= config.buildDir %>/**'
            ]
        },

        watch: {
            options: {
                livereload: true
            },
            js: {
                files: [ 'Gruntfile.js', 'js/reveal.js', 'slides/**/*.js' ],
                tasks: 'js'
            },
            theme: {
                files: [ 'css/theme/source/*.scss', 'css/theme/template/*.scss' ],
                tasks: 'css-themes'
            },
            css: {
                files: [ 'css/reveal.scss' ],
                tasks: 'css-core'
            },
        },

        clean: {
            build: [
                '<%= config.buildDir %>/*',
                '!<%= config.buildDir %>/.git',
                '!<%= config.buildDir %>/.openshift',
                '!<%= config.buildDir %>/Procfile',
                '!<%= config.buildDir %>/CNAME'
            ]
        },

        copy: {
            main: {
                files: [
                    //copy all the dependencies
                    {
                        expand: true,
                        src: [
                            'css/**',
                            'js/**',
                            'lib/**',
                            'plugin/**'
                        ],
                        dest: '<%= config.buildDir %>'
                    },
                    //copy the slides folder
                    {
                        expand: true,
                        src: [
                            'slides/**'
                        ],
                        dest: '<%= config.buildDir %>'
                    }
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
        },

        buildcontrol: {
            options: {
                dir: '<%= config.buildDir %>',
                commit: true,
                push: true,
                connectCommits: true

            },
            github: {
                options: {
                    remote: 'origin',
                    branch: 'gh-pages'
                }
            }
        }

    });

    // Default task
    grunt.registerTask( 'default', [ 'css', 'js' ] );

    // JS task
    grunt.registerTask( 'js', [ 'jshint', 'uglify', 'qunit' ] );

    // Theme CSS
    grunt.registerTask( 'css-themes', [ 'sass:themes' ] );

    // Core framework CSS
    grunt.registerTask( 'css-core', [ 'sass:core', 'autoprefixer', 'cssmin' ] );

    // Package presentation to archive
    grunt.registerTask( 'package', [ 'default', 'copy', 'zip' ] );

    // All CSS
    grunt.registerTask( 'css', [ 'sass', 'autoprefixer', 'cssmin' ] );

    // Serve presentation locally
    grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

    // Run tests
    grunt.registerTask( 'test', [ 'jshint', 'qunit' ] );

    // Build for publising (on gh-pages, for example)
    grunt.registerTask( 'build', [ 'clean:build', 'default', 'copy', 'jade' ]);

    // deploy using buildcontrol
    grunt.registerTask('deploy', function(target) {
      if (!target) {
        grunt.log.warn('You must provide a target for deploy task.');
        return;
      }

      grunt.task.run(['build', 'buildcontrol:' + target]);
    });
};
