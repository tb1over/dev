
const express = require('express');
const router = express.Router();

const chekLogin = require('../middlewares/check').checkLogin;

//GET /signout 登出
router.get('/', chekLogin, (req, res, next)=>{
    res.send('登出');
});

module.exports = router;
