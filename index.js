const alfy = require('alfy');
const { formatBytes, getPackageStats } = require('./util');

async function main() {
	try {
		const { name, version, gzip, size } = await getPackageStats(alfy.input);

		alfy.output([{
            title: `${ name}@${ version }`,
            subtitle: `Size: ${formatBytes(size)}, Gzip: ${formatBytes(gzip)}`,
	    arg: `https://bundlephobia.com/result?p=${name}@{version}`,
	    quicklookurl: `https://bundlephobia.com/result?p=${name}@{version}`
        }]);
	} catch (e) {
		alfy.error(e.message);
	}
}

main();
