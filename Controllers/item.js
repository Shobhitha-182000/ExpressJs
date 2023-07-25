const path=require('path');
const pathDir=require('../util/path');

exports.getAddProduct=(req, res, next) => {
    res.sendFile(path.join(pathDir,'view','admin.html'))
  }

exports.postAddProduct=(req, res, next) => {
    console.log(req.body);
      res.redirect('/contact');
  }