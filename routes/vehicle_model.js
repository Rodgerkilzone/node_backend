const express = require('express');
const router = express.Router();
const vehicle_model=require('./models/vehicle_model');
const fs=require('fs');
router.get('/',function(req,res){
  res.send('Vehicle model APIs');
});
router.post('/post',function(req,res,next){
  vehicle_model.create(req.body).then(function(vehicle_model){
 
res.send(vehicle_model);
  }).catch(next);
});

router.get('/get',function(req,res,next){
  vehicle_model.find({}).then(function(vehicle_model){
//  res.json(vehicle_model.length);
      res.json(vehicle_model);
    
  }).catch(next);
});
router.get('/get/id/:id',function(req,res,next){
  vehicle_model.find({_id:req.params.id}).then(function(vehicle_model){
 

      res.json(vehicle_model);
    
  }).catch(next);
});
router.get('/get/make_id/:id',function(req,res,next){
  vehicle_model.find({make_id:req.params.id}).then(function(vehicle_model){
 

      res.json(vehicle_model);
    
  }).catch(next);
});
router.put('/update/id/:id',function(req,res,next){
  
   vehicle_model.findByIdAndUpdate({_id:req.params.id},
   {
     $set:{
        make_id:req.body.make_id,
        model:req.body.model,
     }
    },
    {new:true}
    ).then(function(vehicle_model){
   
       res.json(vehicle_model);
    
   }).catch(next);
});

router.delete('/delete/id/:id',function(req,res,next){
   vehicle_model.findByIdAndRemove({_id:req.params.id}).then(function(vehicle_model){
    res.send('Vehicle model Deleted');
   }).catch(next);
});


module.exports = router;