const mongoose=require('mongoose');
const Schema=mongoose.Schema;

  const contactSchema=new Schema({
    phone_number:{type:Number,required:[true,'please enter the company service number']},
    facebook_url:{type:String,required:[true,'please enter the company facebook page']},
    twitter_url:{type:String,required:[true,'please enter the company twitter handle']},
    google_url: {type:String,required:[true,'please enter the company google page']},
    email: {type:String,required:[true,'please enter the company email']}
});

const contact=mongoose.model('contact',contactSchema,"contact");
module.exports=contact;