const mix = require("laravel-mix");
const path = require("path");
const webpack = require("webpack");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

const Dotenv = require("dotenv-webpack");
mix.js("resources/js/app.js", "public/js")
    .react()
    .sass("resources/sass/app.sass", "public/css", [
        //
    ]);

mix.browserSync("http://127.0.0.1:8000");

module.exports = {
    plugins: [
        new Dotenv({
            path: "./.env",
        }),
    ],
};
