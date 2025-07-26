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

## R1 - Main Independent Database, and import definitions for e-trade
```
In place of directly parsing in data from CSV files I think it might be better to use the CSV files as a way to import 
data into a Main Independent Database for StrikePoint. I am thinking that a good way to do so would be to use json files 
( for now at least ) and have a a single json file for each date in which there is trade data for. So then I would have
a ~/stock_strikepoint/db/dates folder that would contain files like 2025_07_20.json that will contain all trade data for
that day. This would contain both transactions to and from a bank, divadents, and final gains. Details of all transactions
as well as precomputeded totals, and everything else for that day.

Portfolio snapshots can also be imported into a day by day file as well.

I world then want to create some kind of import definition file for e-trade CSV downloads. This will contains the data, 
and any any custom logic needed to import the various e-trade csv files into this new database format

```

## R0 - Create home folder, Read CSV Files, 'raw' and 'per_day' view

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
