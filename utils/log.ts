//let alert = require('cli-alerts');
import alert from 'cli-alerts';

module.exports = info => {
	alert({
		type: `warning`,
		name: `DEBUG LOG`,
		msg: ``
	});

	console.log(info);
	console.log();
};
