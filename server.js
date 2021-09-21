const express = require('express')
require("dotenv").config()

const connectDB = require('./config/connectDB')


connectDB()

const app = express()

const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use("/api/contact",require("./router/Contact"))

app.listen(PORT,(err)=>{
    err?console.error(err) : console.log(`server is running in port ${PORT}`)
})