const path = require('path');
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');
const autoprefixer = require('autoprefixer');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8888';
const enterFile = 'src/react/index.jsx';
const outerPath = 'public';
module.exports = {
	entry: [
		`webpack-dev-server/client?http://${HOST}:${PORT}`,
		'webpack/hot/only-dev-server',
		path.join(__dirname, enterFile), // Your appʼs entry point

	],
	devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
	output: {
		path: path.join(__dirname, outerPath),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.css', '.sass']
	},
	module: {
		loaders
	},
	postcss: function(){
		return [autoprefixer({browsers: ['last 2 versions', 'IE 7']})]
	},
	devServer: {
		contentBase: './public',
		// do not print bundle build stats
		noInfo: true,
		// enable HMR
		hot: true,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: PORT,
		host: HOST
	},
	plugins: plugins
};
