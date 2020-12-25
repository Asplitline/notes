const express = require('express');
const path = require('path');
const querystring = require('querystring');
const bodyparser = require('body-parser');

// 创建web服务器
const app = express();
// 配置静态路径
app.use(express.static(path.join(__dirname, 'public')));

// 根据客户端设置的请求头设置
app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));

app.get('/01', (req, res) => {
    res.send('hello ajax');
})

app.get('/02', (req, res) => {
    res.send({ "name": 'ajax' });
})

app.get('/03', (req, res) => {
    res.send(req.query);
})

// 获取post数据原生写法
app.post('/04', (req, res) => {
    var currentData = "";
    req.on("data", (data) => {
        currentData += data;
    })
    req.on("end", () => {
        // 利用querystring 解析 name=value&name=value
        var result = querystring.parse(currentData);
        res.send(result);
    })
})

app.post('/05', (req, res) => {
    // console.log(req.body);
    res.send(req.body);
})


app.get('/06', (req, res) => {
    res.send("success");
})

app.get('/07', (req, res) => {
    res.status('400').send();
})


app.listen(3000, () => {
    console.log("http://localhost:3000");
})