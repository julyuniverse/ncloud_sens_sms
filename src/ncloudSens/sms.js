function sendMessage(name, phoneNumber) {
    // modules
    const axios = require('axios');
    const CryptoJS = require('crypto-js');

    // Parameters
    const customerName = name;
    const customerPhoneNumber = phoneNumber;
    const timestamp = Date.now().toString();
    const serviceId = ""; // service id
    const secretKey = ""; // 인증키 Secret Key
    const accessKey = ""; // 인증키 Access Key ID
    const myPhoneNumber = ""; // sens에서 SMS Calling Number 발신번호 등록
    const method = "POST";
    const space = " ";
    const newLine = "\n";
    const url = `https://sens.apigw.ntruss.com/sms/v2/services/${serviceId}/messages`;
    const url2 = `/sms/v2/services/${serviceId}/messages`;

    // 한 번 더 crypto-js 모듈을 이용하여 암호화
    const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
    hmac.update(method);
    hmac.update(space);
    hmac.update(url2);
    hmac.update(newLine);
    hmac.update(timestamp);
    hmac.update(newLine);
    hmac.update(accessKey);
    const hash = hmac.finalize();
    const signature = hash.toString(CryptoJS.enc.Base64);

    // 메시지 전송
    axios({
        method: method,
        url: url,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-ncp-apigw-timestamp": timestamp,
            "x-ncp-iam-access-key": accessKey,
            "x-ncp-apigw-signature-v2": signature,
        },
        data: {
            type: "SMS",
            countryCode: "82",
            from: myPhoneNumber,
            content: `${customerName}님, 안녕하세요!\n\n저희 상품을 항상 이용해 주셔서 감사합니다.`,
            messages: [
                { to: `${customerPhoneNumber}`, },
            ],
        },
    })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    return;
}

module.exports = sendMessage;