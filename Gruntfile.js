module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: ['**/*.scss'],
                    dest: 'dist/',
                    ext: '.css'
                }]
            }
        },
        copy: {     //DONE
            dev: {
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: ['**/*', '!**/*.scss'],
                    dest: 'dist/'
                }, {
                    expand: true,
                    cwd: 'app/bower_components/bootstrap-sass-official/assets/',
                    src: ['**/*'],
                    dest: 'dist/'
                }]
            }
        },
        clean: {            //DONE
            dev: {
                src: ['dist/**']
            }
        },
        watch: {            //Buggy: only watches once
            dev: {
                files: ['app/**'],
                tasks: ['copy:dev','sass:dev'],
                options: {
                    livereload: true
                }
            }
        },
        bower: {    //DONE
            install: {
                //set verbose
                options: {
                    verbose: true,
                    copy: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-npm-install');

    // For now just copy everything; later we will want to do other stuff.
    grunt.registerTask('dev', ['clean:dev', 'copy:dev', 'sass:dev']);
    grunt.registerTask('serve', ['watch:dev']);
    grunt.registerTask('install',['npm-install','bower:install']);
};
