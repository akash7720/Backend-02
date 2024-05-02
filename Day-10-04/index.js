import express from 'express'

const app = express();

app.use(express.json());

app.get( "/",(req,res)=>{
    res.send("Hi hello..")
})

app.post('/Register',(req,res)=>{
    console.log(req.body ,"request to body");
     res.send("WellCome to Register Page")
})

app.listen ( 3000,()=>{
   console.log("Listening on port 3000");
})

