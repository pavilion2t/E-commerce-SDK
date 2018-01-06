/* eslint-disable */
var webpack = require('webpack');

var commonConf = {
    module: {
        loaders: [
            {
                test: /\.tag$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'riotjs-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.(jpeg|jpg|png|gif)$/,
                loader: 'url-loader?limit=10240'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.json$/, loader: 'json-loader'
            },
            {
                test: /\.woff(\?.+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.woff2(\?.+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?.+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?.+)?$/, loader: "file"
            },
            {
                test: /\.svg(\?.+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    resolve: {
        // alias: {
        //     jquery: srcDir + "/js/lib/jquery.min.js",
        //     core: srcDir + "/js/core",
        //     ui: srcDir + "/js/ui"
        // }
    }
};

var webpackConf = {
    dev: {
        output: {
            library: 'pass',
            libraryTarget: 'umd'
        },
        devtool: "inline-source-map", 
        cache: false,
        plugins: [
            new webpack.optimize.ModuleConcatenationPlugin(),
        ],
        module: commonConf.module,
        resolve: commonConf.resolve

    },

    dest: {
        output: {
            library: 'pass',
            libraryTarget: 'umd'
        },
        devtool: false,
        cache: false,
        plugins: [
            new webpack.optimize.ModuleConcatenationPlugin(),
        ],
        module: commonConf.module,
        resolve: commonConf.resolve
    }
};

try {
    var dllref = new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./manifest.json'),
    });
    webpackConf.dev.plugins.unshift(dllref);
    webpackConf.dest.plugins.unshift(dllref);
}
catch(e) {
    console.log(e);
}

webpackConf.rd = Object.assign(webpackConf.dest, {});
webpackConf.qa = Object.assign(webpackConf.dest, {});

module.exports = webpackConf;
