const { contextBridge } = require('electron')


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

API.data = {};

API.update_data = () => {

};

API.foo = () => {
    return 'bar';
};

contextBridge.exposeInMainWorld('API', API );
