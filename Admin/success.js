const path=require('path');
const express=require('express');
const success=express.Router();
const pathDir=require('../util/path');

success.get('/success',(req,res,next)=>{
    res.sendFile(pathDir,'view','success.html');
})

module.exports=success;