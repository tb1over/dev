var express = require('express');
var path = require('path');

var port = process.env.PORT || 3030;

var app = express();

app.set('views', './views/pages');
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'bower_components')));

app.listen(port);

console.log(`server running at port:${port}`);

//路由
app.get('/', (req, res) =>{
    res.render('index', {
        title:'imovie 首页',
        movies:[{
            title: '战狼2',
            _id:1,
            doctor: '吴京',
            country: '中国',
            year:2017,
            poster: 'https://puui.qpic.cn/vcover_vt_pic/0/wi8e2p5kirdaf3j1501228536/260',
            language: '中文',
            flash: '',
            summary: '吴京导演战狼2'
        },{
            title: '战狼2',
            _id:1,
            doctor: '吴京',
            country: '中国',
            year:2017,
            poster: 'https://puui.qpic.cn/vcover_vt_pic/0/wi8e2p5kirdaf3j1501228536/260',
            language: '中文',
            flash: '',
            summary: '吴京导演战狼2'
        },{
            title: '战狼2',
            _id:1,
            doctor: '吴京',
            country: '中国',
            year:2017,
            poster: 'https://puui.qpic.cn/vcover_vt_pic/0/wi8e2p5kirdaf3j1501228536/260',
            language: '中文',
            flash: '',
            summary: '吴京导演战狼2'
        }]
    });
});

//admin
app.get('/admin/movie', (req, res) =>{
    res.render('admin', {
        title:'imovie 后台页面',
        movie: {
            title: '',
            doctor: '',
            country: '',
            year: '',
            poster: '',
            summary: '',
            flash: '',
            language: ''
        }
    });
});

//list
app.get('/admin/list', (req, res) =>{
    res.render('list', {
        title:'imovie 列表页面',
        movies:[{
            title: '战狼2',
            _id:1,
            doctor: '吴京',
            country: '中国',
            year:2017,
            poster: 'http://nxnu.edu.cn',
            language: '中文',
            flash: '',
            summary: '吴京导演战狼2'
        }]
    });
});

//detail
app.get('/movie/:id', (req, res) =>{
    res.render('detail', {title:'imovie 详情页面'});
});