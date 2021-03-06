var path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/star-wars/'
        : './',
        
    pages: {
        index: {
            entry: 'src/app/main.js'
        }
    },
    configureWebpack: {
		resolve: {
			alias: {
				'assets': path.resolve(__dirname, 'src/assets'),
				'styles': path.resolve(__dirname, 'src/styles')
			}
		}
	},
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~styles/_utils";`
            }
        }
    },
    devServer: {
        port: 9000
    }
};