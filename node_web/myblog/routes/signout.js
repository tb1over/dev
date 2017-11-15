
const express = require('express');
const router = express.Router();

const chekLogin = require('../middlewares/check').checkLogin;

//GET /signout 登出
router.get('/', chekLogin, (req, res, next)=>{
    //清空sessiong数据
    req.session.user = null;
    req.flash('success', '登出成功');

    //跳转到主页
    res.redirect('/posts');
});

module.exports = router;
