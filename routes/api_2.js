const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');

const apimodel=require('../models/apimodels');
const paySchema=require('../models/paySchema')


router.get('/:userID',function(req,res){
    console.log("yes")
    const id=req.params.userID;
    var query={username: `${id}`};
    console.log(query);
    apimodel.find(query)
    .exec()
    .then(user=>{
            
            apimodel.findByIdAndUpdate(user[0]._id,{$set:{api1_1:user[0].api1_1+1}},{new:true})
            .then((data)=>
            {
                console.log("Updated")
            })
            paySchema.find()
            .exec()
            .then(product=>{
            res.json(product).status(200);
    })

    })
    
})


router.post('/:userID',(req,res)=>
{
    const newuser=new paySchema({
        //_id: new mongoose.Types.ObjectId(),
        version: req.body.version,
        accountBalanceAmount : req.body.accountBalanceAmount,
        accountCurrencyCode : req.body.accountCurrencyCode,
        lowBalanceAlert: req.body.lowBalanceAlert
     })
   newuser.save()
   res.send("Done")
})




module.exports=router;