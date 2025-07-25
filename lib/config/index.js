const { constants, access, mkdir, writeFile, readdir, readFile  } = require('fs').promises;
const { homedir } = require('os');
const path = require('path');

const CSV_DATA = require( path.join(__dirname, 'csv_data.json') );
const config = {};

const setup_csv_data = (conf) => {
    return readdir(conf.dir_csv)
    .then((contents)=>{
        contents.forEach( (fileName) => {
            const bn = path.basename( fileName, '.csv' );
            const have_def = bn in conf.csv_data;
            if( have_def ){
                console.log('found ' + fileName);
                conf.csv_data[bn].uri = path.join( conf.dir_csv, fileName );
            }
        });
        return conf;
    });
};

config.get = (uri_config=null) => {
    const dir_root = path.join( homedir(), 'stock_strikepoint');
    uri_config = uri_config || path.join( dir_root, 'config.json' );
    return readFile(uri_config, 'utf-8')
    .then( (text) => {
        return JSON.parse( text );
    });
};

config.save = (conf) => {
    return writeFile( conf.uri_config, JSON.stringify( conf ) );
};

config.setup = () => {
    const conf = {};
    conf.dir_root = path.join( homedir(), 'stock_strikepoint');
    conf.dir_csv = path.join( conf.dir_root, 'csv'  );
    conf.csv_data = CSV_DATA;
    conf.uri_config = path.join( conf.dir_root, 'config.json' );
    return mkdir( conf.dir_root, { recursive: true, mode: 0o777 } )
    .then(()=>{
        return mkdir( conf.dir_csv, { recursive: true, mode: 0o777 } );
    })
    .then( () => {
        return access( conf.uri_config, constants.F_OK );
    })
    .catch( (result ) => {
        if( result.code === 'ENOENT' ){
            return config.save(conf)
        }
    })
    .then(  () => {
        return setup_csv_data(conf);
    })
    .then( (conf_update) => {
       return config.save(conf_update);
    })
    .then( ( result ) => {
        return readFile( conf.uri_config, 'utf-8' );
    })
    .then( ( text_conf ) => {
        return JSON.parse( text_conf )
    });    
};

module.exports = config;

