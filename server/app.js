require('dotenv').config({});

const express = require('express');

const app = express();

app.get('/',(req,res)=>{


    res.status(200).send("Welcome To app by Navdeep Singh")
})


module.exports = app;