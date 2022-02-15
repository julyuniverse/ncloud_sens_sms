const express = require('express');
const router = express.Router();
const sendMessage = require('../src/ncloudSens/sms')

// router에서 body-parser 설정 
router.use(express.json())
router.use(express.urlencoded({ extended: false }));

router.post('/', async (req, res, next) => {
    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;

    sendMessage(name, phoneNumber);
    console.log("send message!");
});

module.exports = router;