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

// public assets
// specifying the public assets here, so no need to use word public
app.use(express.static(path.join(__dirname, 'public')))

// production port is usually 80
app.listen(5000)
console.log('server running on localhost:5000')