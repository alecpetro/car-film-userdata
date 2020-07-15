var mysql = require("mysql");

function connectToDB() {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "carfilm_db"
    });

    con.connect(function (err) {
        if (err) {
            console.error("error connecting: " + err.stack);
            return;
        }
        //console.log("connected to db");
    });
    return con;
}

module.exports = connectToDB;