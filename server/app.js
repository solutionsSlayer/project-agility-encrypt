require('dotenv').config();

const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const YML = require('yaml')
const fs = require('fs');
const swaggerDocumentYml = YML.parse(fs.readFileSync('./swagger.yml', 'utf-8'));
//Import router;
const cryptRouter = require('./routes/crypt.router');


const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Protect from CORS error
app.use(cors());

app.use('/crypt', cryptRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocumentYml));


app.listen(port, () => {
});

module.exports = app;
