const express = require('express');
const router = express.Router();
const crypt_controller = require('../controllers/crypt.controller');

router.post('/encrypt', crypt_controller.encrypt);
router.post('/decrypt', crypt_controller.decrypt);

module.exports = router;
