const path = require('path');

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, 'src') + '/react/app.js',
    output: {
        path: path.resolve(__dirname, "dist") + '/js/',
        filename: "tornado.react.js",
        publicPath: "/",
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
};