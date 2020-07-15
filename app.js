//const Joi = require('joi');
const express = require('express');
var mysql = require('mysql');
const app = express();

app.use(express.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "carfilm_db"
});

app.get('/getUser', (req, res) =>{
    con.connect(function(err) {
        con.query("SELECT first_name, last_name, email, phone_number, profile_pic, location_name, photo_filename " +
                    "FROM users INNER JOIN location ON users.location_id = location.id WHERE users.id = 1", function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));