const express = require("express");
const app = express();

const path=require('path');


const bodyParse=require('body-parser');
app.use(bodyParse.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

const adminrouter=require('./Admin/admin');
const shopRouter=require('./Admin/shop');
const userRouter=require('./Admin/user');
const successRouter=require('./Admin/success');

app.use('/admin',adminrouter);
app.use(userRouter);
app.use(shopRouter);
app.use(successRouter);

app.use( (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,'view','404.html'));
});
 
app.listen(4000, () => {
  console.log("4000 port started.....");
});
