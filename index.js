const express = require('express')
const routes = require('./routes/index')
// path is native to npm
const path = require('path')

const app = express()

// routes
app.use('/', routes)

// views
app.set('views', path.join(__dirname, 'views'))
// use hogan html template engine
app.set('view engine', 'hjs')

// production port is usually 80
app.listen(5000)
console.log('server running on localhost:5000')