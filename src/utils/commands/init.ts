const fs = require('fs')

export default async (token) => {
	const filename = '/Users/elias_wahl/argus-cli/src/utils/commands/secrets.json';
	const file = require(filename);
	file.api.token = token

	fs.writeFile(filename, JSON.stringify(file, null, 2), (err) => {
		if (err) {
			return console.log(err);
		} else {
			console.log('writing secrets...');
			console.log(JSON.stringify(file));
		} 
	});
};