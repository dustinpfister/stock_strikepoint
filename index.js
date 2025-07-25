const { app, BrowserWindow } = require('electron');
const config = require('./lib/config/index.js');

const fs = require('fs').promises;
const csv_parse = require('./lib/csv_parse/index.js');

let conf = {};
let data = {};

const create_main_window = () => {
    const win = new BrowserWindow({
        width: 800, height: 600
    });
    win.loadFile('./html/index.html');
};

app.whenReady()
.then( () => {
    return config.setup();
})
.then ( ( conf_setup ) => {
    conf = conf_setup;
    console.log(conf);
})
.then( () => {
    create_main_window();
})

