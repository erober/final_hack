const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');

const apimodel=require('../models/apimodels');

router.get('/',function(req,res){
    
    apimodel.find()
    
    .exec()
    .then(product=>{
        res.json(product).status(200);
    })
})


router.get('/:userID',function(req,res){
    console.log("yes")
    const id=req.params.userID;
    var query={username: `${id}`};
    console.log(query);
    apimodel.find(query)
    
    .exec()
    .then(product=>{
        res.json(product).status(200);
    })
    
})


router.post('/',function(req,res){
    console.log(req.body);
   // res.json(req.body).status(200);
   const newapi=new apimodel({
        //_id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        api1_1 : req.body.api1_1,
        api1_2 : req.body.api1_2,
        api1_3 : req.body.api1_3,
        api2_1 : req.body.api2_1,
        api2_2 : req.body.api2_2,
        api2_3 : req.body.api2_3,
        api3_1 : req.body.api3_1,
        api3_2 : req.body.api3_2,
        api3_3 : req.body.api3_3,
        api4_1 : req.body.api4_1,
        api4_2 : req.body.api4_2,
        api4_3 : req.body.api4_3,
        api5_1 : req.body.api5_1,
        api5_2 : req.body.api5_2,
        api5_3 : req.body.api5_3,
        api6_1 : req.body.api6_1,
        api6_2 : req.body.api6_2,
        api6_3 : req.body.api6_3,
        

   });
   newapi.save();})


           router.delete('/:userID',function(req,res){
            var id=req.params.userID;
            console.log(id);
            console.log('yahan pahuch gye')
            apimodel.deleteOne({username:id})
        
            .exec()
            .then(res=>{
                console.log(res)
            })
            
        })

// router.put('/:userID',function(req,res){
//     var id=req.params.userID;
//     apimodel.findByIdAndUpdate(id,{$set : {api1_1: req.body.api1_1 +1}})
// })

           module.exports=router;