const express = require('express');
const path = require('path');
const app = express();
const formidable = require('formidable');
const request = require('request');

app.use(express.static(path.join(__dirname, 'public')));
// 2-2
app.get('/verifyEmailAdress', (req, res) => {
    const { email } = req.query;
    if (email == '123@123.com') {
        res.status(400).send({ message: '邮箱地址已经注册过了, 请更换其他邮箱地址' });
    } else {
        res.send({ message: '恭喜, 邮箱地址可用' });
    }
})

// 2-3
app.get('/searchAutoPrompt', (req, res) => {
    var { key } = req.query;
    var list = [
        '黑马程序员',
        '黑马程序员官网',
        '黑马程序员顺义校区',
        '黑马程序员学院报名系统',
        '传智播客',
        '传智博客前端与移动端开发',
        '传智播客大数据',
        '传智播客python',
        '传智播客java',
        '传智播客c++',
        '传智播客怎么样'
    ];
    var fitlist = list.filter((item) => item.includes(key));
    res.send(fitlist);
})

// 2-4
// 省
app.get('/province', (req, res) => {
    res.json([{
        id: '001',
        name: '黑龙江省'
    }, {
        id: '002',
        name: '四川省'
    }, {
        id: '003',
        name: '河北省'
    }, {
        id: '004',
        name: '江苏省'
    }]);
})
// 城
app.get('/city', (req, res) => {
    const { id } = req.query;
    const cities = {
        '001': [{
            id: '300',
            name: '哈尔滨市'
        }, {
            id: '301',
            name: '齐齐哈尔市'
        }, {
            id: '302',
            name: '牡丹江市'
        }, {
            id: '303',
            name: '佳木斯市'
        }],
        '002': [{
            id: '400',
            name: '成都市'
        }, {
            id: '401',
            name: '绵阳市'
        }, {
            id: '402',
            name: '德阳市'
        }, {
            id: '403',
            name: '攀枝花市'
        }],
        '003': [{
            id: '500',
            name: '石家庄市'
        }, {
            id: '501',
            name: '唐山市'
        }, {
            id: '502',
            name: '秦皇岛市'
        }, {
            id: '503',
            name: '邯郸市'
        }],
        '004': [{
            id: '600',
            name: '常州市'
        }, {
            id: '601',
            name: '徐州市'
        }, {
            id: '602',
            name: '南京市'
        }, {
            id: '603',
            name: '淮安市'
        }]
    }
    // 响应
    res.send(cities[id] || []);
});
// 县
app.get('/area', (req, res) => {
    const { id } = req.query;
    const areas = {
        '300': [{
            id: '20',
            name: '道里区',
        }, {
            id: '21',
            name: '南岗区'
        }, {
            id: '22',
            name: '平房区',
        }, {
            id: '23',
            name: '松北区'
        }],
        '301': [{
            id: '30',
            name: '龙沙区'
        }, {
            id: '31',
            name: '铁锋区'
        }, {
            id: '32',
            name: '富拉尔基区'
        }]
    };
    res.send(areas[id] || []);
})

// 2-5
app.post('/formdata', (req, res) => {
    // 创建formidable
    const form = new formidable.IncomingForm();
    // 解析客户端传来formdata对象
    form.parse(req, (err, fields, files) => {
        res.send(fields);
    })
})

// 2-6
app.post('/upload', (req, res) => {
    const form = new formidable.IncomingForm();
    // 设置文件存放路径
    form.uploadDir = path.join(__dirname, 'public', 'upload');
    // 保留文件后缀
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        res.send(files.myfile.path.split('public')[1]);
    })
})

// 3-6 
app.get('/cors', (req, res) => {
    // 服务器端cors
    request('http://localhost:3001/cors', (err, response, body) => {
        res.send(body);
    })
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
})