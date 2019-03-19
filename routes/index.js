var express = require('express');
var router = express.Router();

let user = null

const profilesA = [
    { name: "Steve", city: "Brooklyn", profession: 'doctor' },
    { name: "Alex", city: "New York" },
    { name: "Allan", city: "Philly", profession: 'mason' }
]

// two params: route (home is '/'),
router.get('/', (req, res, next) => {

    // get timestamp from middlware in root index.js
    //console.log('Timestamp: '+req.timestamp)
    // req is request from browser
    
    // res is how the server will respond
    //res.send('This is the home route response')
    const data = {
        name: 'homey', 
        date: req.timestamp,
        profiles: profilesA,
        user: user
    }
    
    // data is injected into the rendering engine hjs /views
    res.render('index', data)
})

// login
router.get('/login',(req, res, next)=>{
    res.render('login',null)
})
router.post('/login', (req, res, next) => {
    // string values
    const username = req.body.username
    const password = req.body.password

    if(password === '123'){
        // string converted to obj
        user = {username: username}
        res.redirect('/')
        return
    }

    res.json({data: 'failed login'})
})


// form is in index.hjs
router.post('/join', (req, res, next) => {

    const body = req.body
    profilesA.push(body)

    res.redirect('/')
})

router.get('/json', (req, res, next) => {
    const data = {name: 'Bill', location: 'Texas', date: req.timestamp}
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
