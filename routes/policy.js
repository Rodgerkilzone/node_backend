const express = require('express');
const router = express.Router();
const policy=require('./models/policy');


router.post('/post',function(req,res,next){
policy.create(req.body).then(function(policy){
res.json(policy);
})
    
});
router.get('/get',function(req,res,next){
policy.find({}).then(function(policy){
    res.json(policy);
})
});
router.get('/get/id/:id',function(req,res,next){
policy.findById({_id:req.params.id}).then(function(policy){
    res.json(policy);
})
});
router.delete('/delete/id/:id',function(req,res,next){
policy.findById({_id:req.params.id}).remove().then(function(err){

    res.send('Policy  Deleted');
})
})
module.exports=router;