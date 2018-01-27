const mongoose=require('mongoose');
const Schema=mongoose.Schema;
var dateFormat = require('dateformat');

  const accidentSchema=new Schema({
    user_id:{type:String,trim : true,required:[true,'please enter user id']},
    vehicle:{type:String,trim : true,required:[true,'please enter the type of vehicle']},
    accident_date:{type:String,trim : true,required:[true,'please enter the date of the accident']},
    accident_location:{type:String,trim : true,required:[true,'please enter the location']},
    accident_type:{type:String,trim : true,required:[true,'please enter the accident type']},
    otherDriver_firstName:{type:String,trim : true,},
    otherDriver_lastName:{type:String,trim : true,},
    otherDriver_mobileNumber:{type:String,trim : true},
    witnessInfo_name:{type:String,trim : true},
    witnessInfo_mobileNumber:{type:String,trim : true},
    otherVehicle_manufacturingYear:{type:Number},
    otherVehicle_make:{type:String,trim : true},
    otherVehicle_model:{type:String, trim : true},
    otherVehicle_licencePlateNumber:{type:String,trim : true},
    witness_img:{type:String},
    accident_img_1:{type:String},
    accident_img_2:{type:String},
    accident_img_3:{type:String},
    accident_img_4:{type:String},

    // image_path:{type:String,required:[true,'please enter the image']},
    date : { type : String,default:dateFormat(Date.now(), "mmmm-dS-yyyy hh:MM:ss")}
});

const vehicle_accident=mongoose.model('vehicle_accident',accidentSchema,"vehicle_accident");
module.exports=vehicle_accident;