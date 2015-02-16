module.exports = function(grunt) { // Обязательная функция-обертка
    // Конфигурация проекта
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //------------------------------------------------------------
        less: { // Task less
            options: {
                expand: true
            },
            dev: { // Target
                options: {
                    strictMath: true
                },
                files: {
                   // 'css/all.css': ['less/all.less'],
                    'css/font.css': ['less/font.less'],
                    'css/style.css': ['less/all.less']
                }
            },
            release: { // Target
                options: {
                    strictMath: true,
                    yuicompress: true
                },
                files: {
                    'css/all.css': ['less/all.less']
                  //  'css/font.css': ['less/font.less'],
                  //  'css/style.css': ['less/style.less']
                }
            }
        },
        //------------------------------------------------------------
    });
    // Инициализация плагинов, таски которых мы вызываем
    grunt.loadNpmTasks('grunt-contrib-less');
};
