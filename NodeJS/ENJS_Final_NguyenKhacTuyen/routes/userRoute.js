var express= require('express');
var router= express.Router();
 var userController= require("../controllers/userController");
//list
router.get('/list',userController.list);
// detail
router.get('/detail/:id',userController.detail)
// add
router.post("/add",userController.add)
// edit
router.post('/edit' ,userController.edit)
// delete
router.post("/delete/:user_id",userController.del);
module.exports=router;