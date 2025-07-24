const csv_parse = require('./index.js');
const config = require('../config/index.js');
const fs = require('fs').promises;
const path = require('path');

let conf = {};
const header = ['TransactionDate', 'TransactionType', 'SecurityType', 'Symbol', 'Quantity', 'Amount', 'Price', 'Commission', 'Description'];

const format_cell = (row, index, count=10, str_pad='-', str_end=' ') => {
const keys = Object.keys(row);
    return row[ keys[index] ].padEnd(count, str_pad) + str_end
};

config.setup()
.then( ( config_setup ) => {
    conf = config_setup;
    return fs.readdir( conf.dir_csv );
})
.then(( result ) => {
    if( result.length === 0 ){
        console.log('no csv files found at ');
        console.log( conf.dir_csv );
        return [];
    }
    if( result.length > 0 ){
        const uri_csv = path.join( conf.dir_csv, result[0]);
        console.log('trying to parse: ' + uri_csv);
        return csv_parse( uri_csv, header );
    }
})
.then( ( result ) => {
    result.forEach( ( row ) => {
    
        const keys = Object.keys(row);
    
        if(keys.length === header.length){
        
            const str = '' +
            format_cell(row, 0, 15, ' ')  +
            format_cell(row, 1, 21, ' ')  +
            format_cell(row, 2, 12, ' ')  +
            format_cell(row, 3, 8, ' ')  +
            format_cell(row, 4, 10, ' ')  +
            format_cell(row, 5, 10, ' ') +
            format_cell(row, 6, 10, ' ') +
            format_cell(row, 7, 10, ' ') +
            format_cell(row, 8, 40, ' ').substr(0, 40);
        
            console.log(  str )
        }
    
    });
});

