var express = require('express')
var router = express.Router();
var app = express();

var userController = require("../controller/userController")

router.get('/list',userController.list)

router.get('/detail/:id',userController.detail)

app.use(express.urlencoded({extended : true}));
router.post('/save', userController.add)

router.put('/update/:id',userController.update)

router.delete('/delete/:id', userController.drop)

module.exports = {router}