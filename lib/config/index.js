const { constants, access, mkdir, writeFile, readFile } = require('fs').promises;
const { homedir } = require('os');
const path = require('path'); 

const config = {};

config.setup = () => {
    const conf = {};
    conf.dir_root = path.join( homedir(), 'stock_strikepoint');
    conf.dir_csv = path.join( conf.dir_root, 'csv'  );
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
            return writeFile( conf.uri_config, JSON.stringify( conf ) );
        }
    })
    .then( ( result ) => {
        return readFile( conf.uri_config, 'utf-8' );
    })
    .then( ( text_conf ) => {
        return JSON.parse( text_conf )
    });    
};

module.exports = config;

