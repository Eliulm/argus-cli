const fs = require('fs')

export default async (token : string) => {
	const filename = 'C:/Users/Elias Wahl/argus-cli/src/secrets/secrets.json';
	const file = require(filename);
	file.api.token = token

	fs.writeFile(filename, JSON.stringify(file, null, 2), (err : any) => {
		if (err) {
			return console.log(err);
		} else {
			console.log('writing secrets...');
			console.log("token: " + token );
		} 
	});
};