const express=require('express');
const user=express.Router();
const contact=require('../Controllers/contact');

user.get('/contact', contact.getContact)
user.post('/contact',contact.postContact )

module.exports=user;