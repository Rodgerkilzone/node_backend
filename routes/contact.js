const express = require('express');
const router = express.Router();
const contact=require('./models/contact');


router.post('/post',function(req,res,next){
   contact.find({}).then(function(contacts){
    if(contacts.length==0){

contact.create(req.body).then(function(contact){

res.json(contact);


})
    }else{
        res.send('The Contact Record already Exist ,Delete the Existing Record First.')
    }
})
router.get('/get',function(req,res,next){
contact.find({}).then(function(contact){
    res.json(contact);
})


})
})
router.delete('/delete',function(req,res,next){
contact.remove({}).then(function(err){

    res.send('About us Records Deleted');
})
})
module.exports=router;