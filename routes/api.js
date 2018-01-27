const express = require('express');
var app=express();
var path = require('path');
// const router = express.Router();
// router.get('/',function(res,req,err){
//     if(err){
// console.log(err);
//     };
// res.send('Hilcroft Apis');
// });
app.use(express.static(path.join(__dirname,'..','public')));

// var about_us = require('./about_us');
// var accident_report = require('./accident_report');
// var claim = require('./claim');
// var contact = require('./contact');
// var personal_info = require('./personal_info');
var vehicle_make = require('./vehicle_make');
var vehicle_model = require('./vehicle_model');
// var id_card = require('./id_card');
// var policy = require('./policy');
 var vehicle_info = require('./vehicle_info');
// var accident_type = require('./accident_type');


// app.use('/accident_type',accident_type);
// app.use('/about_us',about_us);
// app.use('/accident_report',accident_report);
// app.use('/claim',claim);
// app.use('/contact',contact);
// app.use('/personal_info',personal_info);
app.use('/vehicle_make',vehicle_make);
app.use('/vehicle_model',vehicle_model);
// app.use('/id_card',id_card);
// app.use('/policy',policy);
 app.use('/vehicle_info',vehicle_info);

module.exports = app;