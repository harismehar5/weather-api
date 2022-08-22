const express = require("express")
const mongoose = require("mongoose")
const url = 'mongodb://localhost/weather'
const weatherRouter  = require('./routes/weather')
const app = express()
const port = 30001

mongoose.connect(url, {useNewUrlParser : true})

const conn = mongoose.connection
conn.on('open', function(){
    console.log('connected...')
})
app.use(express.json())
app.use('/weather', weatherRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})