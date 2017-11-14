
const express = require('express');
const router = express.Router();

router.get('/:name', (req, res) => {

    //res.render()
    //第一个参数是模板的名字，这里是 users 则会匹配 views/users.ejs，
    //第二个参数是传给模板的数据，这里传入 name，则在 ejs 模板中可使用 name
    res.render('users',{       
        name : req.params.name
    });
});

module.exports = router;
