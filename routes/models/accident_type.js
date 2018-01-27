const mongoose=require('mongoose');
const Schema=mongoose.Schema;

  const accidentSchema=new Schema({
    type:{type:String,required:[true,'please enter the company service number']},
   
});

const accident=mongoose.model('accident',accidentSchema,"accident");
module.exports=accident;