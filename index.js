const { app, BrowserWindow } = require('electron');
const config = require('./lib/config/index.js');
const path = require('path');

const fs = require('fs').promises;
const csv_parse = require('./lib/csv_parse/index.js');

let conf = {};
let data = {};

const create_main_window = () => {
    const win = new BrowserWindow({
        width: 800, height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    win.loadFile('./html/index.html');
};

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

app.whenReady()
.then( () => {
    return config.setup();
})
.then( (conf_setup) => {
    conf = conf_setup;
    return Promise.all(  Object.keys(conf.csv_data).map( (data_key)=>{
        return set_data_key(data, conf, data_key);
    }));
})
.then( (results) => {
    create_main_window();
})

