const Express           = require('express');
var Patientcontroller   = require('./IndexController');
var router              = Express.Router();



router.get('/',function (req,res) {
    Indexcontroller.getIndex(req.params.id).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    })
})



module.exports = router;