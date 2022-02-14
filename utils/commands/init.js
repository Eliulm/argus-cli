const fs = require('fs')

module.exports = async (token) => {
	const filename = '../../secrets.json';
	const file = require(filename);

	file.api.token = token

	fs.writeFile(filename, JSON.stringify(file, null, 2), (err) => {
		if (err) {
			return console.log(err);
		} else {
			console.log('writin secrets...');
			console.log(JSON.stringify(file));
		} 
	});
}