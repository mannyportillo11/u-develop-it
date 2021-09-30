//import mysql2 package ------ migrated from server.js for modularization
const mysql = require('mysql2');

// Connect to database ------ migrated from server.js for modularization
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Aukn2isv!',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );


  // export this module
  module.exports = db;