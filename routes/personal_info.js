const express = require('express');
const router = express.Router();
const personal_info=require('./models/personal_info');
router.get('/',function(req,res){
  res.send('Personal Information APIs');
});


router.get('/get',function(req,res,next){
  personal_info.find({}).then(function(personal_info){
  
      res.json(personal_info);
        }).catch(next);
});

router.get('/get/id/:id',function(req,res,next){

  personal_info.findById({_id:req.params.id}).then(function(personal_info){
        
      res.json(personal_info);
      
  }).catch(next);
});


router.get('/get/national_id/:id',function(req,res,next){
  personal_info.find({id_passport:req.params.id}).then(function(personal_info){
      
      res.json(personal_info);
    
  }).catch(next);
});


router.post('/post',function(req,res,next){
  personal_info.find({id_passport:req.body.id_passport}).then(function(personal_infos){
 if(personal_infos.length===0)
{
  var post=new personal_info();
         post.first_name=req.body.first_name;
        post.last_name=req.body.last_name;
        post.id_passport=req.body.id_passport;
        post.email=req.body.email;
        post.mobile_phone=req.body.mobile_phone;
post.save(function(err,personal_info){
  res.json(personal_info)});
}else{

 res.send('National ID or Passport Number already exist');   
}
  }).catch(next);
});


router.put('/update/id/:id',function(req,res,next){
  
   personal_info.findByIdAndUpdate({_id:req.params.id},
   {
     $set:{
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        id_passport:req.body.id_passport,
        email:req.body.email,
        mobile_phone:req.body.mobile_phone
     }
    },
    {new:true}
    ).then(function(personal_info){
   
       res.json(personal_info);
    
   }).catch(next);
});

router.delete('/delete/id/:id',function(req,res,next){
   personal_info.findByIdAndRemove({_id:req.params.id}).then(function(personal_info){

    res.send('Record Deleted');
   }).catch(next);
});

module.exports = router;