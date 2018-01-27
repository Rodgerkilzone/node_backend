const mongoose=require('mongoose');
const Schema=mongoose.Schema;

  const makeSchema=new Schema({
    make:{type:String,required:[true,'please enter the make']},
      year:{type:Array,required:[true,'please enter the year']}
});

const vehicle_make=mongoose.model('vehicle_make',makeSchema,"vehicle_make");
module.exports=vehicle_make;