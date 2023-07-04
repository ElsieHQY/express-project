const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1qaz@WSX',
    database: 'student'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
});

module.exports = connection;