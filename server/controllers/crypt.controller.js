const CryptoJS = require('crypto-js');

exports.encrypt = (req, res, next) => {
    if(req.body.text && req.body.key){
    CryptoJS.AES.encrypt(req.body.text, req.body.key).toString()
        .then(response => {
            res.status(200).json({
                response: response
            })
        })
        .catch(err => console.log(err))
    } else {
        res.status(400).json({'error': `Can't add, bad fields. Check the documentation`});
        console.log(req.body)
    }
}

exports.decrypt = (req, res, next) => {
    if(req.body.text && req.body.key){
    CryptoJS.AES.decrypt(req.body.text, req.body.key).toString()
        .then(response => {
            res.status(200).json({
                response: response
            })
        })
        .catch(err => console.log(err))
    } else {
        res.status(400).json({'error': `Can't add, bad fields. Check the documentation`});
    }
}