const path=require('path');
const pathDir=require('../util/path');

exports.error404=(req, res, next) => {
    res.status(404).sendFile(path.join(pathDir,'view','404.html'));
  }