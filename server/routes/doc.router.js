const router = require('express').Router();
const crypt_controller = require('../controllers/crypt.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocumentYml = require('yaml').parse(require('fs').readFileSync('./swagger.yml', 'utf-8'));

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocumentYml));

module.exports = router;
