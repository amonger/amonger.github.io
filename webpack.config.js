var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: "./js/src/entry.jsx",
    output: {
        path: __dirname + '/js' ,
        filename: "main.js"
    },
    module: {
        loaders: [
            { test: /\.(css)$/, loader: "style!css" },
            { test: /\.(scss)$/, loaders: ["style", "css", "sass"] },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            proxy: 'webpack.dev',
            port: 3000
        })
    ]
};
