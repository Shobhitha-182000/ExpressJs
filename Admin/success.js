 
const express=require('express');
const success=express();
const contact= require('../Controllers/contact')

success.get('/success',contact.getSuccessMessage )

module.exports=success;