const mongoose=require('mongoose');
const Schema=mongoose.Schema;
  const personalSchema=new Schema({
    first_name:{type:String,required:[true,'please enter the FIRSTNAME']},
    last_name:{type:String,required:[true,'please enter the LASTNAME']},
    id_passport:{type:String,required:[true,'please enter the ID or PASSPORT']},
    email:{type:String,required:[true,'please enter the EMAIL ADDRESS']},
    mobile_phone:{type:String,required:[true,'please enter the MOBILE NUMBER']}
});


const personal_info=mongoose.model('personal_info',personalSchema,'personal_info');
module.exports=personal_info;