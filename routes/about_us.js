const express = require('express');
const router = express.Router();
const about_us=require('./models/about_us');


router.post('/post',function(req,res,next){
   about_us.find({}).then(function (about_uss){
    if(about_uss.length==0){


about_us.create(req.body).then(function(about_us){'e',function(req,res,next){

about_us.remove({}).then(function(err){

    res.json(about_us);


} 
    res.send('The About us Record already Exist ,Delete the Existing Record First.')
    
})



router.get('/get',function(req,res,next){
    about_us.find({}).then(function(about_us){
        res.json(about_us);
    })


})
})

router.delete('/delet'
    res.send('About us Records Deleted');
})
})
module.exports=router;