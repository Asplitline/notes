const express = require('express');
const path = require('path');
const app = express();
// 接收post请求参数
const formidable = require('formidable');
// 引入session
var session = require('express-session');
// 配置session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false //不保存未初始化session
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/test', (req, res) => {
    // const fn = req.query.callback;
    // const obj = {
    //     name: 'lisi',
    //     age: 18
    // }
    // const result = fn + '(' + JSON.stringify(obj) + ')';
    // setTimeout(() => {
    //     res.send(result);
    // }, 1000);

    // 等效写法
    res.jsonp({
        name: 'lisi',
        age: 18
    });
    // res.send();
})

app.get('/jsonp', (req, res) => {
    res.send({ name: 'lisi', age: 18 });
})

// 3-5
app.get('/cors', (req, res) => {
    // * - 允许所有客户端访问我
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // // 允许 get,post 访问
    // res.setHeader('Access-Control-Allow-Methods', 'get,post');
    res.send('cors');
})

// 3-7
app.use((req, res, next) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // 跨域请求中涉及到cookie信息,只能是具体的值
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'get,post');
    // 允许客户端跨域携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.post('/login', (req, res) => {

    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        const { username, password } = fields;
        if (username == 'admin' && password == '123456') {
            req.session.isLogin = true;
            res.send({ message: '登录成功' });
        } else {
            // res.session.isLogin = false;
            res.send({ message: '登录失败' });
        }
    })
})
app.get('/checkLogin', (req, res) => {
    if (req.session.isLogin) {
        res.send({ message: '登录状态' });
    } else {
        res.send({ message: '未登录状态' });
    }
})
app.listen(3001, () => {
    console.log('http://localhost:3001');
})