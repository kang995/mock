const path = require('path');
const getIP = require('./utils/getIP');
const express = require('express');
const app = new express();
const cross = require('./utils/cross');

/*跨域*/
cross(app);

/*对method做定向*/
app.use((req, res, next) => (req.method = 'GET') && next());

/*静态文件*/
app.use('/', express.static(path.resolve(__dirname, '..', './mockData')));

/*监听端口*/
const port = 22222;
app.listen(port, () =>
    console.log(`本机服务已启动>>> http://${getIP()}:${port}`)
);