const fs = require('fs');
import { sys_path } from '../../constants/paths';
import { log } from '../cli';

export default async (token: string) => {
  const filename = sys_path + 'src/secrets/secrets.json';
  const file = require(filename);
  file.api.token = token;

  fs.writeFile(filename, JSON.stringify(file, null, 2), (err: any) => {
    if (err) {
      return log(err);
    } else {
      log('writing secrets...');
      log('token: ' + token);
    }
  });
};
