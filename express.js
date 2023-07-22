const express=require('express');

const app=express();
app.use((req,res,next)=>{
    console.log("first midware");
    res.send("<h1>First midware</h1>");
})

app.use((req,res,next)=>{
    console.log("first midware");
    res.send("<h1>First midware</h1>");
    next();
})
app.use((req,res,next)=>{
    console.log("second midware");
    res.send( '<h1>hello to node js </h1>');
})
app.listen(4000,()=>{
    console.log("port started.....")
});