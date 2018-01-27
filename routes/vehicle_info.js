const express = require('express');
const router = express.Router();
const vehicle_info=require('./models/vehicle_info');
router.get('/',function(req,res){
  res.send('User Vehicle Information APIs');
});


router.get('/get',function(req,res,next){
  vehicle_info.find({}).then(function(vehicle_info){
  
      res.json(vehicle_info);
        }).catch(next);
});

router.get('/get/id/:id',function(req,res,next){

  vehicle_info.findById({_id:req.params.id}).then(function(vehicle_info){
        
      res.json(vehicle_info);
      
  }).catch(next);
});


router.get('/get/user_id/:id',function(req,res,next){
  vehicle_info.find({user_id:req.params.id}).then(function(vehicle_info){
      
      res.json(vehicle_info);
    
  }).catch(next);
});


router.post('/post',function(req,res,next){
vehicle_info.create({user_id:req.body.user_id,
                      manufacturing_year:req.body.manufacturing_year,
                      vehicle_make:req.body.vehicle_make,
                      vehicle_model:req.body.vehicle_model,
                      licence_plate_number:req.body.licence_plate_number,
                      chassis_number:req.body.chassis_number
                    }).then(function(vehicle_info){
                       res.json(vehicle_info);
  }).catch(next);
});


router.put('/update/id/:id',function(req,res,next){
  
   vehicle_info.findByIdAndUpdate({_id:req.params.id},
   {
     $set:{
       user_id:req.body.user_id,
        manufacturing_year:req.body.manufacturing_year,
        vehicle_make:req.body.vehicle_make,
        vehicle_model:req.body.vehicle_model,
        licence_plate_number:req.body.licence_plate_number,
        chassis_number:req.body.chassis_number
     }
    },
    {new:true}
    ).then(function(vehicle_info){
   
       res.json(vehicle_info);
    
   }).catch(next);
});

router.delete('/delete/id/:id',function(req,res,next){
   vehicle_info.findByIdAndRemove({_id:req.params.id}).then(function(vehicle_info){

    res.send('Record Deleted');
   }).catch(next);
});

module.exports = router;