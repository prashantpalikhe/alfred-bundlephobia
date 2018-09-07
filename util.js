const alfy = require('alfy');

const util = {
	formatBytes (bytes, decimals = 2) {
		if (bytes == 0) {
			return '0 B';
		}

		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));

		return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
	},

	async getPackageStats(packageName) {
		if (!packageName) {
			throw new Error('Empty name given as argument');
		}

		try {
			const result = await alfy.fetch(
				`https://bundlephobia.com/api/size?package=${packageName}`,
				{
					headers: {'User-Agent': 'alfred-bundlephobia'},
					maxAge: 60000
				}
			);

			if (result.error) {
				throw new Error(result.error);
			}

			return result;
		} catch (e) {
			throw new Error(`No result found for ${ packageName }`);
		}
	}
}


module.exports = util;
