var sqlite3 = require('sqlite3').verbose()
var dbName = './database.db';

var database = new sqlite3.Database(dbName, sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE, (err)=>{
    if (err){
        console.log("Connected failed");
        throw err;
    } else {
        var tbl = `CREATE TABLE IF NOT EXISTS users(
                    id integer primary key autoincrement not null,
                    first_name text not null,
                    last_name text not null,
                    phone text not null,
                    username text not null,
                    password text not null
                   )`
        database.run(tbl,(err)=>{
            if (err){
                console.log("Unable to create table")
                throw err;
            }
        })
    }
})

module.exports = database