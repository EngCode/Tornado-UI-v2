var path = require('path');

module.exports = {
    mode: "production",
    entry :  __dirname + '/javascript/tornado.js',
    output: {
        filename:'tornado.js',
        path: __dirname + '/dist/js',
    },
    entry : __dirname + '/javascript/tornado.js',
    output: {
        filename:'tornado.js',
        path:__dirname + '/docs/assets/',
    }
}