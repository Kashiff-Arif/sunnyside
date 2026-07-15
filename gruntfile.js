/**

 * Created by Atif Arif on 8/23/2016. 

 */

module.exports = function (grunt) {
    const sass = require("node-sass");

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9002,
                    hostname: "localhost",
                    livereload: 35751,
                    base: ".",
                    open: true,
                },
            },
        },

        concat: {
            js: {
                src: [
                    "src/js/jquery-3.6.0.min.js",
                    "src/js/swiper-bundle.8.4.7.min.js",
                    "src/js/jquery.sticky-kit.js",
                ],

                dest: "src/dist/main.js",
            },

            css: {
                src: [
                    "src/css/swiper-bundle.8.4.7.min.css",
                    "src/css/main.css",
                ],

                dest: "src/dist/main.css",
            },
        },

        cssmin: {
            dist: {
                options: {
                    banner: "",
                },

                files: {
                    "src/dist/main.min.css": ["src/dist/main.css"],
                },
            },
        },

        uglify: {
            my_target: {
                files: {
                    "src/dist/main.min.js": ["<%= concat.js.dest %>"],
                },
            },
        },

        sass: {
            options: {
                implementation: sass,

                sourceMap: true,
            },

            dist: {
                files: {
                    "src/css/main.css": ["src/sccs/styles.scss"],
                },
            },

            pages: {
                options: {
                    sourceMap: false,
                },
                files: [
                    {
                        expand: true,
                        cwd: "src/sccs/pages/",
                        src: ["*.scss"],
                        dest: "src/css/pages/",
                        ext: ".css",
                        rename: function (dest, src) {
                            return dest + src.replace(/^_/, "");
                        },
                    },
                ],
            },
        },

        watch: {
            options: {
                livereload: 35751,
                spawn: false,
                event: ["added", "changed"],
                delay: 2000,
            },

            sass: {
                files: ["src/sccs/*.scss", "src/sccs/*/*.scss", "src/sccs/*/*/*.scss"],
                tasks: ["sass:dist", "sass:pages", "concat", "cssmin"],
            },

            php: {
                files: ["*.php", "**/*.php", "includes/**/*.php", "components/**/*.php"],
            },

            html: {
                files: ["*.html", "**/*.html"],
            },

            js: {
                files: ["src/js/**/*.js"],
            },

            css: {
                files: ["src/css/**/*.css", "src/dist/**/*.css"],
            },

            images: {
                files: ["src/images/**/*.{png,jpg,jpeg,gif,webp,svg}"],
            },
        },
    });

    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.loadNpmTasks("grunt-contrib-concat");

    grunt.loadNpmTasks("grunt-contrib-cssmin");

    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.loadNpmTasks("grunt-contrib-connect");

    grunt.registerTask("default", ["sass:dist", "sass:pages", "concat", "cssmin", "uglify"]);

    // Use XAMPP/Apache to serve PHP; grunt watch handles live reload only
    grunt.registerTask("serve", ["watch"]);
};
