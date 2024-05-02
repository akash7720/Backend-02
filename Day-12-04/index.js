import express from "express";

const app =express();

app.use(express.json());

const users=[
    {id:1 , name:"Akash" , email:"akash@gmail.com"},
    {id:2, name:"Bobby" , email:"bobby@gmail.com"},
    {id:3 , name:"Sunny", email:"sunny@gmail.com"},
];


app.get( "/",(req,res)=>{
    res.send("Working...")
})

app.put("/Updates-data/:id",(req,res)=>{
try {
    //  res.send(req.params.id)
      const {name ,email}= req.body;
      if(!name || !email) return res.
      status(404).
        json({massage:"All fildes are requared..", success:false})
  
        const userId = parseInt(req.params.id)
        if(!userId) return res.
        status(404).
        json({massage:"userID is requared..", success:false})
  
        const userData= users.find((user) => user.id === userId);
        if(!userData) return res.
        status(404).
        json({massage:"user is not found...",success:false})
        userData.email= email
      userData.name =name
       res.status(200).json({massage:"userData Updated Successfull",success:true ,UpdatedUserData:userData})
        console.log(userData);
        
 
} catch (error) {
    return res.
    status(500).
    json({success:false,error:error})
} 

    
})
app.listen(3000,()=>{
   console.log("Listening on port 3000");
})