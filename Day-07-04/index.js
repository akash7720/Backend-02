const express = require("express");

const app= express();

app.get("/",(req,res)=>{
    res.send("Wellcome..")
});


app.get("/Login",(req,res)=>{
    res.send("Wellcome login Page..")
});


app.get("/Hello",(req,res)=>{
    res.send("Hi..")
});


app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})