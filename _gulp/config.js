// ---
// CONFIG FILE
// Define your tasks & variables here
// ---

var path = './';
var dest = './';

module.exports = {

    scss: {
        src:[
            path + '_scss/variables.scss',
            path + '_scss/bootstrap.scss',
            path + '_scss/custom.scss'
        ],
        settings: {
            outputStyle: 'compressed'
        },
        concatFilename: 'screen.css', // result filename
        cssDest: dest + 'css/',
        jekyllCssDes: path + '_site/css/',
        prefix: [                    // Autoprefixer supported browsers
            'last 2 version',
            '> 1%',
            'ie 9',
            'ios 6',
            'android 4'
        ]
    },

    js: {
        src : [  // source js file
          path + '_js/*.js',
        ],
        concatFilename: 'app.js', // result filename
        jekyllJsDest: path + '_site/js/',
        jsDest: path + 'js/',
    },

    jekyll: {
        buildMessage: '<span style="color: grey">Building</span> jekyll'
    },

    browsersync: {
        server: {
            baseDir: path + '_site',
            reloadDelay: 2000,
            debounce: 200,
            notify: true,
            ghostMode: {
                clicks: true,
                location: true,
                forms: true,
                scroll: false
            }
        }
    },

    watch: {
        jekyllSource: [    // Files that trigger a Jekyll rebuild
            path + 'img/*.png',
            path + 'img/*.jpg',
            path + 'img/*.svg',
            path + '_includes/**/*.html',
            path + '_layouts/*.html',
            path + '*.html'
        ]
    },

    compressjs: {
        src: path + 'js/*.js',
        dest: path + '_site/js/'
    },

    svg2png: {
        src: path + "img/svg/*.svg",
        settings : {
            scaling : 2, // The scaling factor (optional; default=1.0)
            verbose: false // Logs progress information (optional; default=false)
        },
        dest: path + "img/png"
    },

    destcss: {
        src: path + 'css/screen.css',
        dest: dest + 'styles/'
    },

    destjs: {
        src: path + 'js/*.js',
        dest: dest + 'scripts/'
    },
};
