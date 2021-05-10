const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.json())
app.use(bodyParser.json({ limit: '30mb', extended: true}))

//cors
app.use(cors())

//connect to mongoDB
require('dotenv').config()
const dbURI = process.env.ATLUS_URI
const port = process.env.PORT
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(res => app.listen(process.env.PORT))
    .then(res => console.log('connected to mongo db'))
    .catch(err => console.log(err))