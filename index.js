const alfy = require('alfy');
const { formatBytes, getPackageStats } = require('./util');

async function main() {
	try {
		const { name, version, gzip, size } = await getPackageStats(alfy.input);

		alfy.output([{
            title: `${ name}@${ version }`,
            subtitle: `Size: ${formatBytes(size)}, Gzip: ${formatBytes(gzip)}`
        }]);
	} catch (e) {
		alfy.error(e.message);
	}
}

main();
