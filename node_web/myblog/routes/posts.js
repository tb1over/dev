
const express = require('express');
const router = express.Router();

const checkLogin = require('../middlewares/check').checkLogin;

//GET /posts所有用户的文章
// eg: GET /posts?auto=xxx
router.get('/', function(req, res, next){
    res.send('主页');
});

//POST 发表一篇文章
router.post('/create', checkLogin, (req, res, next)=>{
    res.send('发表文章');
});

//GET 发表文章页
router.get('/create', checkLogin, (req,res,next)=>{
    res.send('发表文章页');
});

//GET 单独一篇的文章页
// /posts/:postId
router.get('/:postId', (req, res, next)=>{
    res.send('文章详情页');
});

//GET /posts/:postId/edit 更新文章页
router.get('/:postId/edit', checkLogin, (req, res, next)=>{
    res.send('更新文章页');
});

//POST /posts/:postId/edit 更新一篇文章
router.post('/:postId/edit', checkLogin, (req, res, next)=>{
    res.send('更新文章');
});

//GET /posts/:postId/remove 删除一篇文章
router.get('/:postId/remove', checkLogin, (req, res, next)=>{
    res.send('删除文章');
});

//POST /posts/:postId/comment 创建一条留言
router.post('/:postId/comment', checkLogin, (req, res, next)=>{
    res.send('创建留言');
});

//GET /posts/:postId/comment/:commentId/remove
//删除一条留言
router.get('/:postId/comment/:commentId/remove',checkLogin, (req, res, next)=>{
    res.send('删除留言');
});

module.exports = router;