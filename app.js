const express =require('express');
const router =require("./routes/api.js")
const app = new express();

app.use("/api/v1",router);



module.exports =app;