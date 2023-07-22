const express = require("express");
const app = express();

const bodyParse=require('body-parser');
app.use(bodyParse.urlencoded({extended:false}));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST">Name of the product<input type="text" name="title"><br>Size of the product <input type="number" name="size"><button type="submit">Add product</button></form>'
  );
});

app.use("/Product", (req, res, next) => {
  console.log(req.body);
    res.redirect('/add-product');
});

app.use("/", (req, res, next) => {
  console.log("Welcome,,,,,");
});
app.listen(4000, () => {
  console.log("port started.....");
});
