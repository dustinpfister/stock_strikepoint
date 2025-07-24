const csv = require('./parse.js');
const fs = require('fs');

const parse = ( uri_csv, opt=[] ) => {
    const results = [];
    return new Promise( (resolve, reject) => {
        fs.createReadStream( uri_csv )

        
        .pipe( csv(opt) )
        .on('data', (data) => results.push(data))
        .on('end', () => {
            resolve(results);
        })
        .on('error', (err) => {
            reject(err);
        });
    });
};

module.exports = parse;
