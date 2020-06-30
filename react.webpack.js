const path = require('path');

module.exports = {
    mode: "production",
    entry: path.join(__dirname, '/src/react/app.tsx'),
    output: {
        filename: 'tornado.react.js',
        path: path.join(__dirname, '/dist/js/')
    },
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [{loader: "ts-loader"}]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};