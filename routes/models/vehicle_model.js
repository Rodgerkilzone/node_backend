const mongoose=require('mongoose');
const Schema=mongoose.Schema;

  const modelSchema=new Schema({
    make_id:{type:String,required:[true,'please enter the make id']},
    model:{type:String,required:[true,'please enter the vehicle model']}
});

const vehicle_model=mongoose.model('vehicle_model',modelSchema,"vehicle_model");
module.exports=vehicle_model;