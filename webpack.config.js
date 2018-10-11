var path = require('path');

module.exports = {
    mode: "production",
    entry : 'javascript/tornado.js',
    output: {
        filename:'tornado.js',
        path:'dist/js/',
    }
}