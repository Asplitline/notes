const express = require('express');

const path = require('path');
const app = express();

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// 4-1
app.get('/base', (req, res) => {
    res.send(req.query);
})
app.post('/base', (req, res) => {
    res.send(req.body);
})

// 4-3
app.get('/jsonp', (req, res) => {
    // const { cb } = req.query;
    // const rst = cb + '(' + JSON.stringify({ message: 'jsonp' }) + ')';
    // res.send(rst);
    res.jsonp({ message: 'jsonp' });
})

// 4-5 用params获取数据
app.get('/users', (req, res) => {
    res.send(`获取用户列表`);
})
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send(`获取id为${id}用户`);
})
app.post('/users', (req, res) => {
    res.send(`添加用户`);
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send(`删除id为${id}用户`);
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send(`修改id为${id}用户`);
});

// 4-6 
app.get('/xml', (req, res) => {
    res.header('content-type', 'text/xml');
    res.send('<message><title>消息标题</title><content>消息内容</content></message>')
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
})