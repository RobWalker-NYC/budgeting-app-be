const express = require('express');
const transRoute = express.Router();
const transArr = require('../models/transactions.js');

transRoute.get('/', (req, res) => {
    res.json(transArr)
});

transRoute.get('/:index', (req, res) => {
    const { index } = req.params;
    if(transApp[index]) {
        res.json(transApp[index])
    } else {
        res.status(404).json({message: 'Page not found'})
    }
});

transRoute.post('/', (req, res) => {
    transArr.push(req.body);
    res.json(transArr[transArr.length - 1]);
});

transRoute.delete('/:index', (req, res) => {
    const { index } = req.params;
    if (transArr[index]) {
        const removeTrans = transApp.splice(index, 1);
        res.json(transApp);
    } else {
        res.status(404).json({message: 'Page not found'});
    }
});

transRoute.put('/:index', (req, res) => {
    const { index } = res.params;
    if(!transApp[index]) {
      return res.status(404).json({message: 'Page not found'});
    }

    let {date, name, amount, from} = req.body;
    if(date && name && amount && from) {
        transArr[index] = {date, name, amount, from};
        return res.json(transApp[index]);
    } else {
    res.status(422).json({error: 'Please provide all fields'});
    }
  });

module.exports = transRoute;