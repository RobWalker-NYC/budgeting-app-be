const express = require('express');
const transRoute = express.Router();
const transArr = require('../models/data.js');

// "/transactions/"
transRoute.get('/', (req, res) => {
    res.json(transArr)
});

// "/transactions/:index"
transRoute.get('/:index', (req, res) => {
    const { index } = req.params
    if(transArr[index]) {
        res.json(transArr[index])
    } else {
        res.status(404).json({message: 'Page not found'})
    }
});

// "/transactions/"
transRoute.post('/', (req, res) => {
    transArr.push(req.body);
    res.json(transArr[transArr.length - 1]);
});

// "/transactions/:index"
transRoute.delete('/:index', (req, res) => {
    const { index } = req.params;
    if (transArr[index]) {
        const removeTrans = transArr.splice(index, 1);
        res.json(transArr);
    } else {
        res.status(404).json({message: 'Page not found'});
    }
});

// "/transactions/:index"
transRoute.put('/:index', (req, res) => {
    const { index } = req.params;
    if(!transArr[index]) {
      return res.status(404).json({message: 'Page not found'});
    }

    let {date, name, amount, from} = req.body;
    if(date && name && amount && from) {
        transArr[index] = {date, name, amount, from};
        return res.json(transArr[index]);
    } else {
    res.status(422).json({error: 'Please provide all fields'});
    }
  });

module.exports = transRoute;