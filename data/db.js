const mysql = require('mysql2');

// Configurazione della connessione al database
const credentials = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

const connection = mysql.createConnection(credentials);

// Connessione al database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connesso al database MySQL!');
});

module.exports = connection;