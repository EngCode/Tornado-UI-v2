const path = require('path');

module.exports = {
    mode: "production",
    entry: path.join(__dirname, '/src/Typescript/custom-scripts.ts'),
    devtool: "source-map",
    output: {
        filename: 'tornado.min.js',
        path: path.join(__dirname, '/dist/js/')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },{
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
};