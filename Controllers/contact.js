const path=require('path');
const pathDir=require('../util/path');

exports.getContact=(req,res,next)=>{
    res.sendFile(path.join(pathDir,'view','contactus.html'));
}

exports.postContact=(req,res,next)=>{
    res.redirect('/success');
}
exports.getSuccessMessage=(req,res,next)=>{
    res.sendFile(pathDir,'view','success.html');
}