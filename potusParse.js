const rp = require('request-promise');
const $ = require('cheerio');

const potusParse = function(url) {
    return rp(url)
        .then(function(html) {
            return {
                name: $('.firstHeading', html).text(),
                birthday: $('.bday', html).text()
            };
        })
        .catch(function(error) {
            console.log( `Something didn't work. Try again later.` );
        })
};

module.exports = potusParse;