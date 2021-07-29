require('dotenv').config();

const express = require('express');
const cors = require('cors');

//Import router;
const cryptRouter = require('./routes/crypt.router');

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Protect from CORS error
app.use(cors());

app.use('/crypt', cryptRouter);

app.listen(port, () => {
});

module.exports = app;
