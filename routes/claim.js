const express = require('express');
const router = express.Router();
const claim_model=require('./models/claim');
var multer=require('multer');
var dateFormat = require('dateformat');
var now = new Date();
var path = require('path');
   var fs = require('fs');
var mkdirp = require('mkdirp');
var storage = multer.diskStorage({
    

destination: function (req, file, cb) {
 cb(null, 'assets/claims/'+req.body.user_id);
    },
    
 filename: function (req, file, cb) {
     mkdirp('assets/claims/'+req.body.user_id, function (err) {
    if (err) {console.error(err)}
    else {console.log('pow!')}
});
    var originalname = file.originalname;
    var extension = originalname.split(".");
    if(req.body.user_id===undefined){
req.body.user_id='Error';
 filename =req.body.user_id;
    }else{
    filename = Date.now() + '.' + extension[extension.length-1];
    }
    cb(null, filename);
    
  }

});
router.get('/',function(req,res){
  res.send('Claim Information APIs ');
});

router.post('/post',multer({storage: storage, dest: 'assets/claims/'}).single('upload'), function(req,res,next){
  claim_model.find({service_number:req.body.service_number}).then(function(claim_models){
 if(claim_models.length===0)
{
     var post= new claim_model();

         post.user_id=req.body.user_id;
          post.service_number=req.body.service_number;
        //   post.date=dateFormat(now, " mmmm-dS-yyyy h:MM:ss");
    // fieldname: req.file.fieldname,
    // originalname: req.file.originalname,
    // encoding: req.file.encoding,
    // mimetype: req.file.mimetype,
    post.image_path="/assets/claims/"+req.body.user_id+'/'+filename;
    // filename: req.file.filename,
    // path: req.file.path,
    // size: req.file.size
  post.save(function(id_upload){
      if(filename==='Error'){
res.json({"Error": "Pass user id as the first variable of the form"});
}
else{
    res.send('Upload successfull');
}
  }).catch(next);
}
else{

 res.send('Service Number already exist');   
}});
});
router.get('/get/user_id/:id',function(req,res,next){
  claim_model.find({user_id:req.params.id}).then(function(claim){
      if(claim.length===0){
          res.send('No Claim Data');
      }else{
          res.json(claim);
      }
       
  }).catch(next);   
});router.get('/get/id/:id',function(req,res,next){
  claim_model.find({_id:req.params.id}).then(function(claim){
      if(claim.length===0){
          res.send('No Adstract Image');
      }else{
          res.sendFile(path.join(__dirname,'..',claim[0].image_path)); 
        //   res.send(claim);
      }
       
  }).catch(next);   
});
router.get('/get',function(req,res,next){
  claim_model.find({}).then(function(claim){
      if(claim.length===0){
          res.send('No Claim Data');
      }else{
        //   res.send('Image');
         res.json(claim);
//   res.sendFile(path.join(__dirname,'..',claim[0].image_path)); 
      }
       
  }).catch(next);   
});
router.delete('/delete/user_id/:id',function(req,res,next){
  claim_model.find({user_id:req.params.id}).remove().then(function(claim){
         res.send('Claim Record deleted');

  }).catch(next);   
})
module.exports = router;