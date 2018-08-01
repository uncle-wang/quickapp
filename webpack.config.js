module.exports = {
	mode: "development",
	entry: './src/main.js',
	output: {
		path: __dirname + "/js",
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'stage-3']
					}
				}
			},
		]
	},
};
