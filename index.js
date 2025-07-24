const { app, BrowserWindow } = require('electron');
const config = require('./lib/config/index.js');

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
.then ( (conf_setup )=> {

    console.log(conf_setup);
    create_main_window();
})

