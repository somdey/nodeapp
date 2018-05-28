const express = require('express');
const async = require('async');
const reflec = require('async/reflect');

const app = express();


let validate = function(req, res, next) {
    if (Object.keys(req.query).length == 0) {
        req.som = 'Hello Som'
        next();
    } else {
        res.json({
            name: 'Som'
        })
    }
}

app.use('/home', validate, (req, res, next) => {   
    res.json({
        name: req.som
    })
})

app.get('/list', (req, res) => {
    async.parallel([
        async.reflect(function(callback) {
            setTimeout(function() {
                console.log(1);
                callback(null, 'one');
            }, 300);       
         }),
        async.reflect(function(callback) {
            setTimeout(function() {
                console.log(2);
                callback('Some errors');
            }, 400);
        }),
        async.reflect(function(callback) {
            setTimeout(function() {
                console.log(3);
                callback(null, 'three');
            }, 100);
        })
    ],
    // optional callback
    function(err, results) {
        res.json(results);
        // values
        // results[0].value = 'one'
        // results[1].error = 'bad stuff happened'
        // results[2].value = 'two'
    });

})

app.use('/listonly', (req, res, next) => {
    async.parallel([
        function(callback) {
            setTimeout(function() {
                console.log(1);
                callback(null, 'one');
            }, 300);
        },
        function(callback) {
            setTimeout(function() {
                console.log(2);
                callback(null, 'two');
            }, 200);
        },
        function(callback) {
            setTimeout(function() {
                console.log(3);
                callback(null, 'three');
            }, 100);
        }
    ],
    // optional callback
    function(err, results) {
        res.json(results);
        // the results array will equal ['one','two'] even though
        // the second function had a shorter timeout.
    });

})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})