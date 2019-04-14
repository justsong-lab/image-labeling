const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', function (req, res, next) {
    res.render('index', {
        info: req.flash('info'),
        error: req.flash('error')
    });
});

router.get('/draw', function (req, res, next) {
    res.render('draw', {
        info: req.flash('info'),
        error: req.flash('error')
    });
});

router.post('/draw', function (req, res) {
    // let imageArray = [];
    // for (let i = 0; i < 20; i++) {
    //     imageArray.push(data.slice(i * 20, (i + 1) * 20));
    // }
    let data = JSON.parse(req.body.data);
    data = req.body.label + "," + data.toString() + "\n";
    console.log(typeof data);
    fs.appendFile('data.csv', data, 'utf8', function (error) {
        res.sendStatus('200');
    });
});

router.get('/mark', function (req, res, next) {
    res.render('mark', {
        info: req.flash('info'),
        error: req.flash('error')
    });
});

module.exports = router;
