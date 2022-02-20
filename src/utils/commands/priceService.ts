const fs = require('fs')
const axios = require('axios')


//TODO implement rest call to get query.
export default async () => {
    const filename = '/Users/elias_wahl/argus-cli/src/sectets/secrets.json';
    const file = require(filename);

    fs.readFile(file, (err : any, data : any) => {
        if (err) console.log(err);

        const token = data.api.token;
        
        axios.get(`https://api.polygon.io/v3/reference/tickers
        ?active=true&sort=ticker&order=asc&limit=10&apiKey=${token}`)
        .then((response : any) => {
            console.log(response.results[0].ticker)
        })
        .catch((error : any) => {
            console.log(error);
        });
    })
}