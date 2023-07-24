const express=require('express');
const router=express.Router();
const path=require('path');
const pathDir=require('../util/path');

router.get("/add-expense", (req, res, next) => {
    res.sendFile(path.join(pathDir,'view','admin.html'))
  });
  
router.post("/add-expense", (req, res, next) => {
    console.log(req.body);
      res.redirect('/contact');
  });

module.exports=router;