const mysql = require('mysql');
const config = require('../config/config.json');

const con = mysql.createConnection({
    host: config.development.host,
    user: config.development.username,
    password: config.development.password
});

con.connect(function (error) {
    if (error) throw error;
    console.log("Connected!");
    con.query("DROP DATABASE IF EXISTS `" + config.development.database + "`;", function (error, result) {
        if (error) throw error;
        console.log("Database dropped!");
        const query = `
            CREATE DATABASE ${ '`' + config.development.database + '`'}
                DEFAULT CHARACTER SET utf8
                DEFAULT COLLATE utf8_general_ci;
        `;
        con.query(query, function (error, result) {
            if (error) throw error;
            console.log("Database created!");
            con.end(function() {
                console.log("Restored db!");
            });
        });
    });
});
