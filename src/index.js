//--------- Dependencies
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//--------- Config
const app = express()
morgan('dev')
require('dotenv').config()

//--------- Const
const PORT = process.env.PORT || 3000

//--------- Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//--------- Router
app.use("/api", require( "./routes/index.routes"))

//--------- Listen
app.listen(PORT, (req,res)=>{
    console.log('Listening to port ' + PORT);
})