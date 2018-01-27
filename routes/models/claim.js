const mongoose=require('mongoose');
const Schema=mongoose.Schema;
var dateFormat = require('dateformat');
  const modelSchema=new Schema({
    user_id:{type:String,required:[true,'please enter the make id']},
    service_number:{type:String,required:[true,'please enter the service number']},
    image_path:{type:String,required:[true,'please enter the image']},
    date : { type : String,default:dateFormat(Date.now(), "mmmm-dS-yyyy hh:MM:ss")}
});

const claim=mongoose.model('claim',modelSchema,"claim");
module.exports=claim;