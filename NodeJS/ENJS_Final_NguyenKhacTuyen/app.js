
const express = require('express');
const app = express();
var port = 8080;
//import Routes
var userRoute= require('./routes/userRoute')


app.use(express.urlencoded({extended:true}))
app.listen(port, (req, res) => {
    console.log("Server is running on  http://localhost:8080/");
})
app.get("/", (req, res) => {
    res.json({ message: 'ok' })
})
app.use('/user',userRoute);

