var database = require("../database/db")
var list = (req,res)=>{
    var list =`SELECT * FROM users`;
    database.all(list, (err,rows)=>{
        if (err) {
            res.status(400).json({message: err.message});
        }else {
            res.json({message : 'Success', data: rows})
        }
    })
}
var detail = (req,res)=>{
    var detail =`SELECT * FROM users WHERE id = ?`;
    var id = req.params.id;
    database.get(detail,[id], (err, row)=>{
        if (err) {
            res.status(400).json({message: err.message});
        }

        else {
            if (row == null){
                res.json({message : `There are no department with id: ${id}`})
            } else {
                res.json({message : 'Success', data: row})
            }
        }
    })
}
var add = (req,res)=>{
    var save =`INSERT INTO users(first_name, last_name, phone, username, password) values (?,?,?,?,?)`
    var first = req.body.first_name
    var last = req.body.last_name
    var phone = req.body.phone
    var username = req.body.username
    var password = req.body.password
    if (first == null || first == "" || last == null || last == "" ||
        phone == null || phone == "" || username == null || username == "" || password == null ||
        password == ""){
        res.json({message : "You must fill all the info"})
    }else {
        database.run(save, [first,last,phone,username,password], err=>{
            if (err){
                res.status(400).json({message: err.message});
            } else {
                res.json({message : 'Success'})
            }
        })
    }
}
var update = (req,res)=>{
    var update =`UPDATE users SET first_name = ?, last_name = ?, phone = ?, username = ?, password = ?
                  WHERE id = ?`
    var first = req.body.first_name
    var last = req.body.last_name
    var phone = req.body.phone
    var username = req.body.username
    var password = req.body.password
    var id = req.params.id;
    if (first == null || first == "" || last == null || last == "" ||
        phone == null || phone == "" || username == null || username == "" || password == null ||
        password == ""){
        res.json({message : "You must fill all the info"})
    }else {
        database.run(update, [first,last,phone,username,password,id], err=>{
            if (err){
                res.status(400).json({message: err.message});
            } else {
                res.json({message : 'Success'})
            }
        })
    }
}
var drop = (req,res)=>{
    var drop = `delete from users where id = ? `
    var id = req.params.id;
    database.get(drop,[id],(err, row) => {
        if (err){
            res.status(400).json({message: err.message});
        } else {
            res.json({message : 'Success'})
        }
    })
}

module.exports = {list,detail,add,update,drop}