const CryptoJS = require('crypto-js');
const hexToString = require("../utils/hexToString");

exports.encrypt = (req, res, next) => {
    if (req.body.text && req.body.key) {
        res.status(200).json({ EncryptedReturn: CryptoJS.AES.encrypt(req.body.text, req.body.key).toString()});
    } else {
        res.status(400).json({'error': `Can't add, bad fields. Check the documentation`});
    }
}

exports.decrypt = (req, res, next) => {
    if (req.body.text && req.body.key) {
        res.status(200).json({ DecryptedReturn: hexToString.hexToString(CryptoJS.DES.decrypt(text, key).toString())});
    } else {
        res.status(400).json({'error': `Can't add, bad fields. Check the documentation`});
    }
}