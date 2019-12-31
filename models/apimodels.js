const mongoose=require('mongoose');
const apiSchema= mongoose.Schema({
    
    username: {type: String, required:true,unique:true},
    api1_1: {type:Number},
    api1_2: {type:Number},
    api1_3: {type:Number},
    api2_1: {type:Number},
    api2_2: {type:Number},
    api2_3: {type:Number},
    api3_1: {type:Number},
    api3_2: {type:Number},
    api3_3: {type:Number},
    api4_1: {type:Number},
    api4_2: {type:Number},
    api4_3: {type:Number},
    api5_1: {type:Number},
    api5_2: {type:Number},
    api5_3: {type:Number},
    api6_1: {type:Number},
    api6_2: {type:Number},
    api6_3: {type:Number},
});

module.exports= mongoose.model('api',apiSchema);