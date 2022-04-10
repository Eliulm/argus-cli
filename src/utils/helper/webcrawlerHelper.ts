const axios = require('axios');
import { log } from '../cli';

export const fetchData = async (url: string): Promise<any> => {
  log('Crawling data...');
  log('');
  // make http call to url
  let response: any = await axios(url, { withCredentials: true }).catch(err =>
    log(err)
  );

  if (response.status !== 200) {
    log('Error occurred while fetching data');
    return;
  }
  return response;
};
