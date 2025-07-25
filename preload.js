const { contextBridge } = require('electron')

const API = {};

API.foo = () => {
    return 'bar';
};

contextBridge.exposeInMainWorld('API', API );
