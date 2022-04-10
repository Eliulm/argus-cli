const fs = require('fs');
const axios = require('axios');

import { log } from '../cli';
import { sys_path } from '../../constants/paths';

//TODO implement rest call to get query.
export default async () => {
  const filename = sys_path + 'src/secrets/secrets.json';
  const file = require(filename);

  fs.readFile(file, (err: any, data: any) => {
    if (err) log(err);

    const token = data.api.token;

    axios
      .get(
        `https://api.polygon.io/v3/reference/tickers
        ?active=true&sort=ticker&order=asc&limit=10&apiKey=${token}`
      )
      .then((response: any) => {
        log(response.results[0].ticker);
      })
      .catch((error: any) => {
        log(error);
      });
  });
};
