const express = require('express')
const routes = require('./routes/index')
// path is native to npm
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

/* * * * * * * * *middleware * * * * * * * *  */
// public assets
// specifying the public assets here, 
// so no need to use word public in our index.hjs
app.use(express.static(path.join(__dirname, 'public')))
// extract form data from a POST request
app.use(bodyParser.urlencoded({extended:false}))

// manual middleware - runs before every request is handled
app.use((req, res, next)=>{
    //console.log('First middleware!')
    req.timestamp = new Date().toDateString()
    next()
})

// routes
app.use('/', routes)

// views
app.set('views', path.join(__dirname, 'views'))
// use hogan html template engine
app.set('view engine', 'hjs')

// production port is usually 80
app.listen(5000)
console.log('server running on localhost:5000')