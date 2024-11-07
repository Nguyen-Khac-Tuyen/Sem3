var express = require('express')
var PORT = 8080;

var userRoutes = require('./routes/userRoute')

var app = express()

app.listen(PORT, ()=>{
    console.log(`Server is running at localhost:${PORT}`);
})

app.get('/',(req,res)=>{

    res.json({message: "Welcome"})

})

app.use(express.urlencoded({extended : true}));
app.use('/user', userRoutes.router);

