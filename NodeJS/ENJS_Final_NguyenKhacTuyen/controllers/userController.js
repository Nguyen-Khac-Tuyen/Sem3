var db = require("../db/dbUser");


function val(input) {
    if (input == null || input == "") return -1;
    else return 0;
}
var list = (req, res) => {
    var list = `SELECT * FROM user`;
    db.all(list, (err, rows) => {
        if (err) {
            res.status(400).json({ message: err.message });
        } else {
            res.json({ message: 'Success', data: rows });
        }
    })
}

var detail = (req, res) => {
    var detail = ` SELECT * FROM user WHERE user_id= ?`;
    var id = req.params.id;
    if (val(id) == -1) {
        res.send("Errro url");
        return;
    }
    db.get(detail, [id], (err, row) => {
        if (err) {
            throw err;
        } else {
            res.json({ message: 'Success', data: row });
        }
    })

}

var add = (req, res) => {
    var ins = `INSERT INTO user(firstName ,lastName ,Mobile,userName,passWord ) VALUES (?,?,?,?,?)`;
    var firstName = req.query.firstName;
    var lastName = req.query.lastName;
    var Mobile = req.query.Mobile;
    var userName = req.query.userName;
    var passWord = req.query.passWord;
    if (val(firstName) == -1 || val(lastName) == -1 || val(Mobile) == -1 || val(userName) == -1 || val(passWord) == -1) {
        res.send("Have data null on input");
        return;
    }
    db.run(ins, [firstName, lastName, Mobile, userName, passWord]);
    var list = `SELECT * FROM user `;
    // hien thi danh sach sau khi them
    db.all(list, (err, rows) => {
        if (err) {
            res.status(400).json({ message: err.message });
        } else {
            res.json({ message: 'Success', data: rows });
        }
    })
}
var edit = (req, res) => {
    var firstName = req.query.firstName;
    var lastName = req.query.lastName;
    var Mobile = req.query.Mobile;
    var userName = req.query.userName;
    var passWord = req.query.passWord;
    var user_id = req.query.user_id;
    if (val(firstName) == -1 || val(lastName) == -1 || val(Mobile) == -1 || val(userName) == -1 || val(passWord) == -1 || val(user_id) == -1) {
        res.send("Have data error");
        return;
    }
    var sql = `UPDATE user SET firstName=? , lastName=? , Mobile=?, userName=? , passWord= ? WHERE user_id=?`;
    db.get(sql, [firstName, lastName, Mobile, userName, passWord, user_id], (err, row) => {
        var detail = ` SELECT * FROM user WHERE user_id= ?`;
       
     
        db.get(detail, [user_id], (err, row1) => {
            if (err) {
                throw err;
            } else {
                res.json({ message: 'Edit Success', data: row1 });
            }
        })

    })

}
var del = (req, res) => {
    var user_id = req.params.user_id;
    if (val(user_id) == -1) {
        res.send("user_id is invalid");
        return;
    }
    var sql1 = `SELECT Mobile FROM user WHERE user_id=?`;

    var del = `DELETE FROM user WHERE user_id=?`;
    db.run(del, [user_id]);
    var list = `SELECT * FROM user`;
    db.all(list, (err, rows) => {
        if (err) {
            res.status(400).json({ message: err.message });
        } else {
            res.json({ message:`Deleted user_id=${user_id}. All user`, data: rows });
        }
    })

}
module.exports = { list, detail, add, edit, del };