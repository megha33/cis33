// will use node through this file 

'use strict'; // variables must be declared before usage

/*  will use this to access the db - db must be saved in .accdb format! (ours is)  */
const ADODB = require('node-adodb');
try {
    const connection = ADODB.open("provider=Microsoft.ACE.OLEDB.12.0;" + "Data Source=../Debug/BookStore_Tutorial.accdb");
}
catch (err) {
    alert("ERRRORR");
}