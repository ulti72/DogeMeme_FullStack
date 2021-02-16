require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var postMemeRoutes = require('./controllers/postMemeController')


var app = express()
app.use(bodyParser.json())
app.listen(process.env.PORT || 8081,()=>console.log('Server started at : 8081'))


app.use('/memes',postMemeRoutes)
