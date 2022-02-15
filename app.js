const express = require('express');
const app = express();
const port = 3000;
const router = require('./router/router'); // 라우터 경로 설정

app.get('/', function (req, res, next) {
    console.log('1, Hello World!');
    req.reqTime = Date.now(); // 다음 미들웨어로 보낼 data 설정
    next(); // next() 함수를 호출하면 다음 미들웨어 함수로 제어가 전달됨.
}, function (req, res) {
    let text = "3, Hello World!";
    text += req.reqTime; // 이전 미들웨어에서 보낸 data 설정
    res.send('2, Hello World! ' + text);
});

app.use('/sens/sms', router); // router 설정

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});