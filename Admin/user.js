const express=require('express');
const user=express.Router();
const path=require('path');
const pathDir=require('../util/path');

user.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(pathDir,'view','contactus.html'));
})
user.post('/contact',(req,res,next)=>{
    res.redirect('/success');
})

module.exports=user;