const express=require('express');
const routers=express.Router();
const path=require('path');
const pathDir=require('../util/path');

routers.get("/success", (req, res, next) => {
     res.sendFile(path.join(pathDir,'view','success.html'))
  });
module.exports=routers;