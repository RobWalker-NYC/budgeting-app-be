const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome");
});

// app.use('/logs', transactionController);

app.get('*', (req, res) => {
    res.status(404).json({ error: 'Page not found'});
});

module.exports = app;