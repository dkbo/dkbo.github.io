const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = [
	// 清除
	// new WebpackCleanupPlugin(),
	// 將打包環境指令為生產環境
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"production"'
		}
	}),
	//提取代碼中的公共模塊，然後將公共模塊打包到一個獨立的文件中，以便在其他的入口和模塊中使用。
	//別忘了在html中單獨引入抽離出來的公共模塊。
	new webpack.optimize.CommonsChunkPlugin({
					name: [
						// 'polyfill',
						'react',
					],
					minChunks: Infinity
	}),
	//刪除多餘的依賴
	new webpack.optimize.DedupePlugin(),
	//醜化最小化程式
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false,
			screw_ie8: true,
			// drop_console: true,
			drop_debugger: true
		},
		// comments: false,
		// beautify: false, //prod

	}),
	new webpack.optimize.OccurenceOrderPlugin(),
	// new ExtractTextPlugin('./css/[name]_[contenthash].css', {
	new ExtractTextPlugin('./css/[name].css', {
		allChunks: true
	}),
	new HtmlWebpackPlugin({
		template: './src/jade/index.jade',
	}),
	//全域加載模組
	new webpack.ProvidePlugin({
		'Promise': 'es6-promise',
		'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
	})
];
