# ncloud sens sms
> ncloud의 sens sms를 이용해 문자 메시지 전송
 - 메시지 전송 시스템을 모듈화
 - 고객의 이름과 전화번호를 받아 post 방식으로 localhost:3000/sens/sms에 요청해서 고객에게 메시지 전송

## npm install
```
npm install express axios crypto-js
npm install -g nodemon
```

## express body parser
 - express 버전이 4.16.0 미만일 경우 body-parser 설치 필요
```
npm install body-parser

// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```

 - express 버전이 4.16.0 이상일 경우 body-parser 설치 없이 express에 내장된 모듈 사용
```
// app.js
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```