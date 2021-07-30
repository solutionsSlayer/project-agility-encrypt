const router = require('express').Router();
const crypt_controller = require('../controllers/crypt.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocumentYml = require('yaml').parse(require('fs').readFileSync('./swagger.yml', 'utf-8'));
const options = {
    customCss: `
  .topbar-wrapper img {content:url(https://img.icons8.com/doodle/2x/-freelancefirm.png); width:50px; height:auto;}
  .swagger-ui .topbar { background-color: #000000; border-bottom: 20px solid #5dc6d1; }`,
    customSiteTitle: "Poopcode APIs"
};

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocumentYml, {customCssUrl: '/assets/css/swagger.css'}));

module.exports = router;
