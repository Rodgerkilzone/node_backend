const express = require('express');
const router = express.Router();
const id_card_model=require('./models/id_card');
var multer=require('multer');
var path = require('path');
   var fs = require('fs');

var storage = multer.diskStorage({
destination: function (req, file, cb) {
 cb(null, 'assets/id_cards/');
    },
    
 filename: function (req, file, cb) {
    var originalname = file.originalname;
    var extension = originalname.split(".");
    if(req.body.user_id===undefined){
req.body.user_id='Error';
 filename =req.body.user_id;
    }else{
    filename = req.body.user_id + '.' + extension[extension.length-1];
    }
    cb(null, filename);
    
  }

});
router.get('/',function(req,res){
  res.send('Id card Information APIs');
});

router.post('/post',multer({storage: storage, dest: 'assets/id_cards/'}).single('upload'), function(req,res,next){
     id_card_model.find({user_id:req.body.user_id}).then(function(id_card_models){
 if(id_card_models.length===0)
{
     var post= new id_card_model();

         post.user_id=req.body.user_id;
    // fieldname: req.file.fieldname,
    // originalname: req.file.originalname,
    // encoding: req.file.encoding,
    // mimetype: req.file.mimetype,
    post.image_path="/assets/id_cards/"+filename;
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
  
  })
}else{
    res.send('Upload successfull');
}}).catch(next);

});
router.get('/get/user_id/:id',function(req,res,next){
  id_card_model.find({user_id:req.params.id}).then(function(id_card){
      if(id_card.length===0){
          res.send('No id Image');
      }else{
  res.sendFile(path.join(__dirname,'..',id_card[0].image_path)); 
      }
       
  }).catch(next);   
})
router.get('/get',function(req,res,next){
  id_card_model.find({}).then(function(id_card){
      if(id_card.length===0){
          res.send('No id Images');
      }else{
      res.json(id_card);
//   res.sendFile(path.join(__dirname,'..',id_card[0].image_path)); 
      }
       
  }).catch(next);   
})
router.delete('/delete/user_id/:id',function(req,res,next){
  id_card_model.find({user_id:req.params.id}).remove().then(function(id_card){
         res.send('id image Deleted');

  }).catch(next);   
})
module.exports = router;