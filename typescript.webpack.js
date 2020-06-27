const path = require('path');

module.exports = {
    mode: "production",
    entry: path.join(__dirname, '/src/Typescript/Tornado.ts'),
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
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};