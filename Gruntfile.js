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
        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: ['**/*', '!**/*.scss'],
                    dest: 'dist/'
                }]
            }
        },
        clean: {
            dev: {
                src: ['dist/**']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // For now just copy everything; later we will want to do other stuff.
    grunt.registerTask('dev', ['clean:dev', 'copy:dev', 'sass:dev']);
};