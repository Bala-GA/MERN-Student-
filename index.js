const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors());
//body parser
//**** The Body Parser should be installed first by npm i body-parser
const morgan = require('morgan')
app.use(morgan('dev'));
app.use(express.json())
require('dotenv/config')
const StuRouter = require('./router')
app.use('/info',StuRouter)


app.listen(process.env.PORT,(req,res) => {
    console.log(`Server started at ${process.env.PORT}`)
})

app.get('/',(req,res) => {
    res.send("Hii")
})

mongoose.set('strictQuery',true);
mongoose.connect((process.env.MYDB_CONNECTION),(err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("DB connected successfully")
    }
})