const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tes'
});

exports.db = db;