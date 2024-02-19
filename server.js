const express = require('express')
const db = require('./db')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express()
const logger = require('morgan')
app.use(logger('dev'))
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


app.get('/', (req, res) => res.send('This is our landing page!'))
