const express = require("express");
const app = express();

const bodyParse=require('body-parser');
app.use(bodyParse.urlencoded({extended:false}));

const adminrouter=require('./Admin/admin');
const shopRouter=require('./Admin/shop');

app.use('/admin',adminrouter);
app.use(shopRouter);

app.use( (req, res, next) => {
  res.send('<h1>page not found</h1>');
});
 
app.listen(4000, () => {
  console.log("4000 port started.....");
});
