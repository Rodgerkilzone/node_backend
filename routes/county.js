const express = require('express');
const router = express.Router();
const county=require('./citys/county.js');
const county=require('./citys/county.js');
router.get('/',function(req,res){
  res.send({type:'get'});
});

// router.get('/county/:id',function(req,res){
//   county.findById({_id:req.params.id}).exec(function(err,county){
//     if(err){
//       console.log('error:'+err)
//     }else{
//       res.json(county);
//     }
//   });
// });
router.get('/county',function(req,res){
  county.find({}).exec(function(err,county){
    if(err){
      console.log('error:'+err)
    }else{
      res.json(county);
    }
  });
});
router.get('/county/:name',function(req,res){
  county.find({countyName: new RegExp('^'+req.params.name+'$', "i")}).exec(function(err,county){
    if(err){
      console.log('error:'+err)
    }else{
      res.json(county);
    }
  });
});
router.get('/county/city/:name',function(req,res){
  county.find({city: new RegExp('^'+req.params.name+'$', "i")}).exec(function(err,county){
    if(err){
      console.log('error:'+err)
    }else{
      res.json(county);
    }
  });
});

router.post('/county',function(req,res,next){
  // county.find({city: new RegExp('^'+req.body.city+'$', "i"),countyName: new RegExp('^'+req.body.countyName+'$', "i")}).then(function(err,county){
  //   if(ninja){
  //     res.send('city already exist');
  //   }else{
  //     res.send('city does not exist');
  //   };
  // }

  county.create(req.body.county).then(function(err,county){
    if(err){
      res.send(err);
    }else{
res.send(county)};
  }).catch(next);
  
});
router.put('/county/:id',function(req,res,next){
  county.findByIdAndUpdate({_id:req.params.id},req.body,{new:true}).then(function(county){
      res.send(county);
  }).catch(next);
});
router.delete('/county/:id',function(req,res,next){
  county.findByIdAndRemove({_id:req.params.id}).then(function(county){
      res.send(county);
  }).catch(next);

});
router.post('/county',function(req,res,next){
  county.create(req.body.county).then(function(err,county){
    if(err){
      res.send(err);
    }else{
res.send(county)};
  }).catch(next);
  
});
router.get('/county/',function(req,res){
  county.find({}).exec(function(err,county){
    if(err){
      console.log('error:'+err)
    }else{
      res.json(county);
    }
  });
});
module.exports = router;