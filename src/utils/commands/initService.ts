const fs = require('fs');
import { sys_path } from '../../constants/paths';

export default async (token: string) => {
  const filename = sys_path + 'src/secrets/secrets.json';
  const file = require(filename);
  file.api.token = token;

  fs.writeFile(filename, JSON.stringify(file, null, 2), (err: any) => {
    if (err) {
      return console.log(err);
    } else {
      console.log('writing secrets...');
      console.log('token: ' + token);
    }
  });
};
