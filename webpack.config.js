const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const polyfill = require("babel-polyfill");

//const path = require('path');

module.exports = {
    //Path of the file to convert
    entry: ['babel-polyfill', './src/index.js'],

    //Path to the converted file
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    //Por for the webpack-dev-server (autocompile code)
    devServer: {
        port: 6969
    },
    //Es para que no falle al usar la opción a continuación en el fichero 'main.js'
    // new Vue({
    //     el: '#app',
    //     components: { App },
    //     template: '<app/>'
    //   })
    resolve: {
        alias: {
          vue: 'vue/dist/vue.js'
        }
      },
    //This will contain the files that are not JS that you want to autoimport and compile into your project
    module: {
        rules: [
            {
                test: /\.js$/, //Regular expression
                exclude: /(node_modules)/,//excluded node_modules
                use: {
                loader: "babel-loader",
                    options: {
                    presets: ["@babel/preset-env"]  //Preset used for env setup
                    }
                }
            },
            {
                test: /\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        //Plugin that autoimport dependencies into HTML
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: __dirname + "/dist/index.html"
        }),
        // Plugin that autoimport and compile CSS
        new miniCssExtractPlugin({
            publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return path.relative(path.dirname(resourcePath), context) + '/';
            },
            filename: "../dist/assets/css/[name].css",
            chunkFilename: "[id].css"
        }),
        new VueLoaderPlugin()
    ]
}