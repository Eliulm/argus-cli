const figlet = require('figlet');

module.exports =  () => {
    figlet('argus-cli', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
        }
        console.log(data);
    })
}