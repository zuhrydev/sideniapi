var express = require('express');
var auth = require('./auth');
var router = express.Router;

router.post('/api/v1/register', auth.registrasi);


module.exports=router;