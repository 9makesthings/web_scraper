const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
    .then(function(html) {
        console.log(  $('.firstheading', html).text() );
        console.log( $('.bday', html).text() );
        
    })
    .catch(function(error) {
        console.log( `Something didn't work. Try again later.` );
    })