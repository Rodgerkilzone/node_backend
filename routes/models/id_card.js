const mongoose=require('mongoose');
const Schema=mongoose.Schema;

  const idSchema=new Schema({
    user_id:{type:String,required:[true,'please enter user id']},
    image_path:{type:String,required:[true,'please enter image path']}
});


const id_card=mongoose.model('id_card',idSchema,'id_card');
module.exports=id_card;