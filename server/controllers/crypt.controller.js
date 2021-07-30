const CryptoJS = require('crypto-js');
const hexToString = require("../utils/hexToString");
const utf8 = require("utf8/utf8");
const algorithms = ["AES", "DES", "TripleDES", "Rabbit", "RC4", "RC4Drop"]

exports.encrypt = (req, res, next) => {
    if (req.body.text && req.body.key && req.body.algorithm) {
        if(algorithms.includes(req.body.algorithm)){
            res.status(200).json({ encrypted: CryptoJS.AES.encrypt(req.body.text, req.body.key).toString()});
        } else {
            res.status(422).json({error: `wrong algotithm, allowed: ${algorithms.join(", ")}`});
        }
    } else {
        res.status(422).json({error: `Cannot process with this data`});
    }
}

exports.decrypt = (req, res, next) => {
    if (req.body.text && req.body.key && req.body.algorithm) {
        if(algorithms.includes(req.body.algorithm)){
            let resultUtf8;
            try{
                resultUtf8 = utf8.decode(hexToString(CryptoJS.AES.decrypt(req.body.text, req.body.key).toString()));
            }catch(e){
                resultUtf8 = "cannot decrypt";
            }
            if(!resultUtf8) resultUtf8 =  "error, wrong key or algorithm"
            res.status(200).json({ decrypted: resultUtf8});
        } else {
            res.status(422).json({error: `wrong algotithm, allowed: ${algorithms.join(", ")}`});
        }
    } else {
        res.status(422).json({error: `Cannot process with this data`});
    }
}