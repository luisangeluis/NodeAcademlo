const router =require('express').Router();
const {loginUser} =require('./auth.http')
const {register} = require('../users/user.http');

router.post('/login',loginUser);
router.post('/register',register)

exports.router =router;