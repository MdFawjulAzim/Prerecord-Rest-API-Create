const express =require('express');
const router =require("./routes/api.js")
const app = new express();

app.use("/api/v1",router);


//undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",message: "Page not found"})
})
module.exports =app;