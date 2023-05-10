const mysql = require('mysql');

require('dotenv').config();

const {DB_HOST,DB_PASSWORD,DB_USER,DB_NAME}=process.env;

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
  });
  
  connection.connect((error) => {
    if (error) {
      console.error('Koneksi ke MySQL gagal: ' + error.stack);
      return;
    }
    console.log('Terhubung ke MySQL dengan ID ' + connection.threadId);
  });

  module.exports = connection