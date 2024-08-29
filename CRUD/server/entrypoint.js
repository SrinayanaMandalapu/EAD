const express = require('express')
const mongoose = require('mongoose')
const studentRouter = require('./controller/studentController')

const url = "mongodb://localhost:27017/crud"
const app = express()
mongoose.connect(url)
const con = mongoose.connection

con.on('open', ()=>
{
    console.log('succesfully connected to database')
})

app.use(express.json())
app.use('/students', studentRouter)
app.listen(8000, ()=>{
    console.log('server started')
})