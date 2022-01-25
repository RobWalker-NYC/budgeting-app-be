const express = require('express');
const app = express();
const cors = require('cors');
const transactionController = require('./controllers/transactionController.js');

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    next()
});

app.get('/', (req, res) => {
    res.send("Welcome, Budget App be");
});

app.use('/transactions', transactionController);

app.get('*', (req, res) => {
    res.status(404).json({ error: 'Page not found'});
});

module.exports = app;