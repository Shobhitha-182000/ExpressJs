const express=require('express');
const routers=express.Router();

routers.get("/", (req, res, next) => {
     res.send('<h1>In the Shop page</h1>');
  });
module.exports=routers;