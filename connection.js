const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pokedex'
  });
  
  connection.connect((error) => {
    if (error) {
      console.error('Koneksi ke MySQL gagal: ' + error.stack);
      return;
    }
    console.log('Terhubung ke MySQL dengan ID ' + connection.threadId);
  });

  module.exports = connection