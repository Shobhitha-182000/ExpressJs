const express = require("express");
const router = express.Router();
const item = require("../Controllers/item");

router.get("/add-expense", item.getAddProduct);

router.post("/add-expense", item.postAddProduct);

module.exports = router;
