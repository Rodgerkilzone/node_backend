const express = require('express');
const router = express.Router();
var cors = require('cors');
const vehicle_make=require('./models/vehicle_make');

router.get('/',function(req,res){
  res.send('Vehicle Make APIs');
});
router.post('/post',function(req,res,next){
  vehicle_make.create(req.body).then(function(vehicle_make){
 
res.send(vehicle_make);
  }).catch(next);
});

router.get('/get',function(req,res,next){
  vehicle_make.find({}).then(function(vehicle_make){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.json(vehicle_make);
    
  }).catch(next);
});
router.get('/get/id/:id',function(req,res,next){
  vehicle_make.find({_id:req.params.id}).then(function(vehicle_make){
      res.json(vehicle_make);
  }).catch(next);
});
router.put('/update/id/:id',function(req,res,next){
  
   vehicle_make.findByIdAndUpdate({_id:req.params.id},
   {
     $set:{
        make:req.body.make,
     }
    },
    {new:true}
    ).then(function(vehicle_make){
   
       res.json(vehicle_make);
    
   }).catch(next);
});

router.delete('/delete/id/:id',function(req,res,next){
   vehicle_make.findByIdAndRemove({_id:req.params.id}).then(function(vehicle_make){
    res.send('Vehicle make Deleted');
   }).catch(next);
});


module.exports = router;