const express =require("express");
const router = require("./routes/electronics/electronicsRoute");
const router2 = require("./routes/dress/shirtRoute");
const app =express();

app.get("/",(req,res)=>{
    res.send("hello");
});

app.use("/electronics",router)
app.use("/shirts",router2)
app.listen(3000);