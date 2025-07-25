# todo list for stock_strikepoint

## RX - CSV generator
```
I do at this point have a csv parser in place which is great, but I think it will also be very helpful 
to have a generator as well. This will allow for me to create custom csv files from the main data in
strikepoint which goes without saying, but it will also allow for things like injecting expressions
in cells and so forth.
```

## RX - Improved View
```

```

## R0 - create home folder, Read CSV Files, 'raw' and 'per_day' view

```
  * ( done ) - start a config lib that will be used to create, and update a main config object
  * ( done ) - create a ~/stock_strikepoint folder if it is not there
  * ( done ) - create a ~/stock_strikepoint/csv folder if it is not there
  * ( done ) - create a ~/stock_strikepoint/config.json if it is not there.  
  * ( done ) - setup csv data with headers and urls for DownloadTxnHistory.csv
  * ( done ) - use config.json to store filename patterns, and header data.
  * ( done ) - start a csv lib folder
  * ( done ) - test out csv parse by reading CSV files that where downloaded from e-trades
  * ( done ) - have a set_data_key function in root index.js
  * ( done ) - have a config.save method 
  * ( done ) - start a preload.js file
  * ( done ) - have a config.get method that will just simply get the current config
  * ( done ) - have a crude start of a view for at least one data key in the html
  * ( done ) - readme files for all current libs
  * ( done ) - start a 'per_day' lib
  * (      ) - have a gains and losses def for csv_data.json
  * (      ) - let the 'crude start' view be a 'raw' view
  * (      ) - have a 'per_day' view
  

  
  
  * (      ) - have a config.reset method
  * (      ) - start a custom menu starting with view
  
```
