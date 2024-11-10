const express=require('express')

const router2=express.Router();


router2.get("/printedshirts",(req,res)=>{

    res.send("printed shirts data");
});
router2.get("/floral",(req,res)=>{

    res.send("floral shirts data");
});
module.exports=router2;
