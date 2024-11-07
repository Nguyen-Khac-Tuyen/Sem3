var sqlite3 = require('sqlite3').verbose();
var dbName = './data.db';
var db = new sqlite3.Database(dbName, (err) => {
    if (err) {
        console.log("Connect failed");
        throw err;
    }
    else {
        var tbl = `CREATE TABLE IF NOT EXISTS user   (
            user_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            firstName TEXT NOT NULL ,
            lastName TEXT NOT NULL,
            Mobile INTEGER,
            userName TEXT NOT NULL,
            passWord TEXT NOT NULL
        )`;
        db.run(tbl, (err) => {
            if (err) {
                console.log("Create table failed.");
                throw err;
            }
      
        })
    }
})
module.exports=db;