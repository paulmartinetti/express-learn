var express = require('express');
var router = express.Router();

// two params: route (home is '/'),
router.get('/', (req, res, next) => {
    // req is request from browser
    
    // res is how the server will respond
    //res.send('This is the home route response')
    const data = {name: 'homey', date: 'yesterday'}
    
    // data is injected into the rendering engine hjs /views
    res.render('index', data)
})

router.get('/json', (req, res, next) => {
    const data = {name: 'Bill', location: 'Texas'}
    res.json(data)
})

// should be in the views file
// templating engine
router.get('/html', (req, res, next) => {
    const html = `<html><h1 style='color:red'>This is an h1 tag</h1></html>`
    res.send(html)
})

// dynamic response - based on query string
// http://localhost:5000/query?key=value&key2=value2 .. for example
router.get('/query', (req, res, next) => {
    const query = req.query
    res.json(query)
})

// dynamic response - route params
// http://localhost:5000/params/bill/texas - example converts into json
// all values must be entered each time (here is name and location)
router.get('/params/:name/:location', (req, res, next) => {
    const params = req.params
    res.json({
        params: params
    })
})

// google 'node express project structure'
module.exports = router;
