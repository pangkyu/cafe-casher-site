const mysql = require('mysql');
const database = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password  : 'onlyroot',
  //  database : 'opentutorials'
  });
  
  database.connect();
  module.exports = database;