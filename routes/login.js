const express = require("express");
const router = express.Router();
const connection = require("./db");

router.get('/:user_id', (req, res) => {
    const json = req.params;
    const user_id = json.user_id;
    const db = connection();

    var sql = "SELECT first_name, last_name, email, phone_number, profile_pic, location_name, photo_filename ";
    sql += "FROM users ";
    sql += "INNER JOIN location ON users.location_id = location.id ";
    sql += "WHERE users.id = ? ";
    sql += "LIMIT 1";

    db.query(sql, [user_id], function (err, results, fields) {
        if (err) throw err;
        //check for results
        if (results.length > 0) {
            res.send(results[0]);
        } else {
            res.send({
                errors: "No login user found"
            });
        }
        db.end();
    });
});

module.exports = router;