require('dotenv').config() 
const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
// import express from "express";
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!'
})

app.get('/twitter',(req,res)=>{
    res.send('sumantdotcom')
})

app.get('/login',(req, res)=>{
 res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res)=>{
  res.send('<h1>Chai aur code</h>')
})

app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${port}`)
})
