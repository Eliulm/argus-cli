const axios = require('axios');

export const fetchData = async (url : string) : Promise<any> => {
    console.log("Crawling data...");
    console.log("");
    // make http call to url
    let response : any = await axios(url, { withCredentials: true}).catch((err) => console.log(err));

    if(response.status !== 200){
        console.log("Error occurred while fetching data");
        return;
    }
    return response;
}