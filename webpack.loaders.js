const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProduction = () => process.argv.indexOf('-p') !== -1;

module.exports = [
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|bower_components)/,
		loader: 'babel',
		query: {
		  presets: ['es2015', 'stage-0', 'react'],
		  plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties'],
		}
	},
	{ test: /\.jade$/, loader: 'jade' },
	// { test: /\.s?a?c?ss$/, loader: 'style!css!sass' },
	{ test: /\.s?a?c?ss$/, loader: isProduction() ? ExtractTextPlugin.extract('style', 'css!postcss!sass') : 'style!css!postcss!sass' },
	{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
	{ test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
	{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
	{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
	{ test: /\.gif/, loader: 'url-loader?limit=10000&mimetype=image/gif&name=images/[name].[ext]' },
	{ test: /\.jpg/, loader: 'url-loader?limit=10000&mimetype=image/jpg&name=images/[name].[ext]' },
	{ test: /\.png/, loader: 'url-loader?limit=10000&mimetype=image/png&name=images/[name].[ext]' }
];
