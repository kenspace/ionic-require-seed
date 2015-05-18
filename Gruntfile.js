module.exports = function(grunt){
    'use strict';

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var config = {
        www:'www',
        dest:'dest'
    };

    grunt.initConfig({
        config:config,
        copy:{
            templates:{
                files:[
                    {
                        expand:true,
                        cwd:'<%= config.www %>/',
                        src:['js/modules/**/*.html','tabs.html'],
                        dest:'<%= config.dest %>/'
                    }
                ]
            },
            images:{
                files:[
                    {
                        expand:true,
                        cwd:'<%= config.www %>/',
                        src:'img/**/*',
                        dest:'<%= config.dest %>/',
                        flatten:false
                    }
                ]
            },
            lib:{
                files:[
                    {
                        expand:true,
                        cwd:'<%= config.www %>/',
                        src:['lib/ionic/js/ionic.bundle.min.js','lib/require/require.min.js', 'js/main.js'],
                        dest:'<%= config.dest %>/',
                        flatten:false
                    }
                ]
            },
            fonts:{
                files:[
                    {
                        expand:true,
                        cwd:'<%= config.www %>/',
                        src:['lib/ionic/fonts/**/*'],
                        dest:'<%= config.dest %>/fonts/',
                        flatten:true
                    }
                ]
            }

        },
        clean:{
            dest:{
                src:[
                    '<%= config.dest%>/css/**/*',
                    '<%= config.dest%>/js/**/*',
                    '<%= config.dest%>/img/**/*',
                    '<%= config.dest%>/fonts/**/*'
                ]
            },
            temp:{
                src:['<%= config.dest%>/js/dest.js']
            }
        },
        jshint: {
            all:[
                '<%= config.www %>/js/**/*.js'
            ]
        },
        concat: {
            js: {
                src:[
                    '<%= config.www %>/js/app.js',
                    '<%= config.www %>/js/modules/**/*.js',
                    '<%= config.www %>/js/services/**/*.js'
                ],
                dest:'<%= config.dest %>/js/dest.js'
            }
        },
        uglify: {
            buildall: {
                options: {
                    mangle: true,
                    report: "min"
                },
                files: [{
                    expand:true,
                    cwd:'<%= config.www %>',
                    src:'js/**/*.js',
                    dest: '<%= config.dest %>/'
                }]
            }
        },
        cssmin: {
            combine: {
                files: {
                    '<%= config.dest %>/css/dest.min.css': ['<%= config.www %>/lib/ionic/css/ionic.min.css','<%= config.www %>/css/style.css']
                }
            }
        }
    });

    grunt.registerTask('default', ['clean','jshint','copy','concat','uglify','cssmin','clean:temp']);
};