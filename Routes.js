const Express=require('express');

var Routes=Express.Router();


var Controller=require('./IndexController/IndexController.Route');


Routes.use('/',Controller);

module.exports=Routes;