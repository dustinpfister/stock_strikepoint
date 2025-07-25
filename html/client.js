API.update_data()
.then( (result) => {
    let html = '<table>';
    Object.keys(result.data).forEach( (key) => {
        const header = result.conf.csv_data[key].header;
        //html = '<table><tr><th>' + header[0] + '</th><th>' + header[1] + '</th></tr>';
        
        html += '<tr>';
        header.forEach( (key_desc) => {
            html += '<th>' + key_desc + '</th>';
        });
        html += '</tr>';
        
        result.data[key].forEach( (row) => {
            //html += '<tr><td>' + row[ header[0] ] + '</td><td>' + row[ header[1] ] +'</td></tr>';
            html += '<tr>';
            header.forEach( (key_desc) => {
                html += '<td>' + row[key_desc] + '</td>';
            });
            html += '</tr>';
            
        });
    });
    document.body.innerHTML = html + '</table>';

})
    
