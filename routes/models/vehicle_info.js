const mongoose=require('mongoose');
const Schema=mongoose.Schema;

  const vehicleSchema=new Schema({
    user_id:{type:String,required:[true,'please enter user id']},
    manufacturing_year:{type:Number,required:[true,'please enter manufacture year']},
    vehicle_make:{type:String,required:[true,'please enter make']},
    vehicle_model:{type:String,required:[true,'please enter model']},
    licence_plate_number:{type:String,required:[true,'please enter licene plate number']},
    chassis_number:{type:String,required:[true,'please enter chassis number']},

});


const vehicle_info=mongoose.model('vehicle_info',vehicleSchema,'vehicle_info');
module.exports=vehicle_info;

