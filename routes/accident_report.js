const express = require('express');
const router = express.Router();
const accident_report=require('./models/accident_report');
var multer=require('multer');
var dateFormat = require('dateformat');
var now = new Date();
var path = require('path');
const personal_info=require('./models/personal_info');
   var fs = require('fs');
var mkdirp = require('mkdirp');
 var glob = require("glob");
var readfiles = require('readfiles');
var find = require('find');
var storage = multer.diskStorage({
    destination: function (req, file,cb) {
    cb(null,'assets/accident_reports/'+req.body.user_id+'/'+'new');
    },
    
 filename: function (req, file, cb) {
           mkdirp('assets/accident_reports/'+req.body.user_id+'/'+'new', function (err) {
    if (err) {console.error(err)}
    else {console.log('User Directory Updated')}
});
 
  var fieldname=file.fieldname;
    var originalname = file.originalname;
    var extension = originalname.split(".");
   
        
    filename =Date.now()+'_'+(Math.floor(Math.random()*10000))+ '.' + extension[extension.length-1];
    
    cb(null, filename);
    
  },

});
router.get('/',function(req,res){
  res.send('accident_report Information APIs ');
});
router.post('/post',multer({storage: storage, dest: 'assets/accident_reports/'}).
fields([{ name: 'witness', maxCount: 1 }, { name: 'accident', maxCount: 4 }]),
 function(req,res,next){
    //  personal_info.find({user_id:req.body.user_id}).then(function(err,personal_infos){
    //      if(err){
    //          console.log(err);
    //      };
    //      console.log(personal_info+'rererer');
    //   if(personal_infos.length===0){
    //       console.log('User is not signed in');
    //   }else{
    //       console.log('User is signed in');
    //   }});
     var post= new accident_report();
     if(req.body.user_id){
     if(req.body.user_id.trim()!==""){
    post.user_id=req.body.user_id.trim();}
};

    if(req.body.vehicle){
     if(req.body.vehicle.trim()!==""){
    post.vehicle=req.body.vehicle.trim();}
};
   
    if(req.body.accident_type){
     if(req.body.accident_type.trim()!==""){
    post.accident_type=req.body.accident_type.trim();}
};
   
    if(req.body.accident_date){
     if(req.body.accident_date.trim()!==""){
    post.accident_date=req.body.accident_date.trim();}
};

 if(req.body.accident_location){
     if(req.body.accident_location.trim()!==""){
    post.accident_location=req.body.accident_location.trim();}
};

  if(req.body.otherDriver_firstName){
     if(req.body.otherDriver_firstName.trim()!==""){
    post.otherDriver_firstName=req.body.otherDriver_firstName.trim();}
};
    
   if(req.body.otherDriver_lastName){
     if(req.body.otherDriver_lastName.trim()!==""){
    post.otherDriver_lastName=req.body.otherDriver_lastName.trim();}
};
if(req.body.otherDriver_mobileNumber){
     if(req.body.otherDriver_mobileNumber.trim()!==""){
    post.otherDriver_mobileNumber=req.body.otherDriver_mobileNumber.trim();}
};
    
if(req.body.witnessInfo_name){
     if(req.body.witnessInfo_name.trim()!==""){
    post.witnessInfo_name=req.body.witnessInfo_name.trim();}
};

if(req.body.witnessInfo_mobileNumber){
     if(req.body.witnessInfo_mobileNumber.trim()!==""){
    post.witnessInfo_mobileNumber=req.body.witnessInfo_mobileNumber.trim();}
};
 if(req.body.otherVehicle_manufacturingYear){
     if(req.body.otherVehicle_manufacturingYear.trim()!==""){
    post.otherVehicle_manufacturingYear=req.body.otherVehicle_manufacturingYear.trim();}
};
   if(req.body.otherVehicle_make){
     if(req.body.otherVehicle_make.trim()!==""){
    post.otherVehicle_make=req.body.otherVehicle_make.trim();}
};

  
   if(req.body.otherVehicle_model){
     if(req.body.otherVehicle_model.trim()!==""){
    post.otherVehicle_model=req.body.otherVehicle_model.trim();}
};


 if(req.body.otherVehicle_licencePlateNumber){
     if(req.body.otherVehicle_licencePlateNumber.trim()!==""){
    post.otherVehicle_licencePlateNumber=req.body.otherVehicle_licencePlateNumber.trim();}
};
    if(req.files.witness===undefined){
console.log('undefined');
    }else{
    if(req.files.witness.length===1){
       post.witness_img=req.files.witness[0].filename;
    };}
       if(req.files.accident===undefined){
console.log('undefined');
    }else{
    if(req.files.accident.length===1){
        post.accident_img_1=req.files.accident[0].filename;
    };
    if(req.files.accident.length===2){
        post.accident_img_1=req.files.accident[0].filename;
        post.accident_img_2=req.files.accident[1].filename;
    };
    if(req.files.accident.length===3){
        post.accident_img_1=req.files.accident[0].filename;
        post.accident_img_2=req.files.accident[1].filename;
        post.accident_img_3=req.files.accident[2].filename;
    };
    if(req.files.accident.length===4){
        post.accident_img_1=req.files.accident[0].filename;
        post.accident_img_2=req.files.accident[1].filename;
        post.accident_img_3=req.files.accident[2].filename;
        post.accident_img_4=req.files.accident[3].filename;
    };};
  post.save(function(err,accident){
      if(err){
    res.send(err);
}else{
fs.rename('assets/accident_reports/'+req.body.user_id+'/new','assets/accident_reports/'+req.body.user_id+'/'+accident._id, function(err) {
    if ( err ) console.log('ERROR: ' + err);});
  res.send(accident);     
}
  });
}

);

router.get('/get/img/:id/:img',function(req,res,err){
  accident_report.findById({_id:req.params.id}).then(function(accident_report){
      if(accident_report.length===0){
          res.send('No accident Record');
      }else{
        res.sendFile(path.join(__dirname,'..','assets/accident_reports',accident_report.user_id,req.params.id,req.params.img)); 
      }
  })
    if(err){
        res.send('No image')
    };
 
});
router.get('/get/id/:id',function(req,res,next){
  accident_report.findById({_id:req.params.id}).then(function(accident_report){
      if(accident_report.length===0){
          res.send('No accident Record');
      }else{
          res.json(accident_report);
      }
       
  }).catch(next);   
});

router.get('/get',function(req,res,next){
  accident_report.find({}).then(function(accident_report){
      if(accident_report.length===0){
          res.send('No accident reports');
      }else{
        //   res.send('Image');
         res.json(accident_report);
//   res.sendFile(path.join(__dirname,'..',accident_report[0].image_path)); 
      }
       
  }).catch(next);   
});
router.get('/get/user_id/:id',function(req,res,next){
  accident_report.find({user_id:req.params.id}).then(function(accident_report){
      if(accident_report.length===0){
          res.send('No accident reports');
      }else{
        //   res.send('Image');
         res.json(accident_report);
//   res.sendFile(path.join(__dirname,'..',accident_report[0].image_path)); 
      }
       
  }).catch(next);   
});

router.delete('/delete/id/:id',function(req,res,next){
     accident_report.find({_id:req.params.id}).then(function(err,data){
         if(err){
             res.send('No Accident Record with the ID');
         };
var rimraf = require('rimraf');
console.log('assets/accident_reports/'+data[0].user_id+'/'+req.params.id);
rimraf('assets/accident_reports/'+data[0].user_id+'/'+req.params.id, function () { console.log('done'); });
     
  accident_report.find({_id:req.params.id}).remove().then(function(accident_report){
         res.send('Accident Record Deleted');
 })
     }).catch(next);;
})
module.exports = router;