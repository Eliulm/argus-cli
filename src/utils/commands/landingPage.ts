const figlet = require('figlet');

export default () => {
    figlet('argus-cli', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
        }
        console.log(data);
    })
}