const express=require('express')

const router=express.Router();


router.get("/mobiles",(req,res)=>{

    res.send("mobiles data");
});
router.get("/laptop",(req,res)=>{

    res.send("laptop data");
});
module.exports=router;
