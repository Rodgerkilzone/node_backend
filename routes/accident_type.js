const express = require('express');
const router = express.Router();
const accident_type=require('./models/accident_type');


router.post('/post',function(req,res,next){
accident_type.create({type:req.body.type}).then(function(accident_type){
res.json(accident_type);
})
    
});
router.get('/get',function(req,res,next){
accident_type.find({}).then(function(accident_type){
    res.json(accident_type);
})
});
router.get('/get/id/:id',function(req,res,next){
accident_type.findById({_id:req.params.id}).then(function(accident_type){
    res.json(accident_type);
})
});
router.delete('/delete/id/:id',function(req,res,next){
accident_type.findById({_id:req.params.id}).remove().then(function(err){

    res.send('Accident type  Deleted');
})
})
module.exports=router;