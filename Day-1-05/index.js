import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import productSchema from './schemas/product.schemas.js';

const app = express();
app.use(express.json())
dotenv.config();

app.get("/",(req,res)=>{
   res.send("Working..")
})

app.post("/Add-Product", async (req, res) => {
    try {
      const { name, category, price, quantity } = req.body;
      if (!name || !category || !price || !quantity) {
        return res.json({ success: false, error: "All fields are required." });
      }
      const newProduct = new productSchema({
        name: name,
        category: category,
        price: price,
        quantity: quantity,
      });
      await newProduct.save();
      return res.json({success: true, massage:"Product successfully stored." });
    } catch (error) {
      return res.json({ success: false, error });
    }
  });
mongoose.connect(process.env.MANGODB_URL).then(()=>{
    console.log("DB connected...");
 })

app.listen(3000,()=>{
  console.log("Listening on port 3000");
})


