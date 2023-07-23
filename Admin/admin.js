const express=require('express');
const router=express.Router();

router.get("/add-expense", (req, res, next) => {
    res.send(
      '<form action="/admin/add-expense" method="POST">Name of the product<input type="text" name="title"><br>Size of the product <input type="number" name="size"><button type="submit">Add product</button></form>'
    );
  });
  
router.post("/add-expense", (req, res, next) => {
    console.log(req.body);
      res.redirect('/admin/add-expense');
  });

module.exports=router;