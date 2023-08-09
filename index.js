const express = require('express')
const mongoose = require('mongoose')

const heroRoutes = require('./routes/hero')
require('dotenv').config()
const cors = require ('cors');


const app = express()
const port = (process.env.PORT || 3005)
app.set('port', port)

app.use(express.json())
app.use('/api/heroes',heroRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use (cors())

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=> console.log('conect to DB'))
.catch((err)=>console.error(err.message))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})