require('dotenv').config();
const express = require('express');
const cryptRouter = require('./routes/crypt.router');
const docRouter = require('./routes/doc.router');


const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Protect from CORS error
app.use((require('cors'))());
app.use('/assets', express.static('assets'));

app.use('/api', cryptRouter);
app.use('/doc', docRouter);


app.listen(port, () => {
});

module.exports = app;
