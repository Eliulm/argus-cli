const figlet = require('figlet');

import { log } from '../cli';

export default () => {
  figlet('argus-cli', function(err, data) {
    if (err) {
      log('Something went wrong...');
      console.dir(err);
    }
    log(data);
  });
};
