const { contextBridge } = require('electron');
const config = require( './lib/config/index.js' );
const csv_parse = require('./lib/csv_parse/index.js');


const set_data_key = (data, conf, data_key='DownloadTxnHistory') => {
    return csv_parse(conf.csv_data[ data_key ].uri, conf.csv_data[data_key].header )
    .then( (result) => {
        const data_rows = data[data_key] = [];
        const header = conf.csv_data[data_key].header;
        result.forEach( ( row ) => {
            const keys = Object.keys(row);
            if( keys.length === header.length && row[ keys[0] ] != header[0] ){
                data_rows.push(row);
            }
        });
        return data;
    });
};

const API = {};

API.update_data = () => {
    let conf = {};
    let data = {};
    return config.get()
    .then( (conf_new) => {
        conf = conf_new;
        return Promise.all(  Object.keys(conf.csv_data).map( (data_key)=>{
            return set_data_key(data, conf, data_key);
        }));
    })
    .then(()=>{
        return {
            data: data,
            conf: conf
        };
    })
};

API.foo = () => {
    return 'bar';
};

contextBridge.exposeInMainWorld('API', API );
