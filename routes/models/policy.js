const mongoose=require('mongoose');
const Schema=mongoose.Schema;
// const addresSchema=new Schema({
// group:{type:String,required:[true,'please enter the group']},
// building:{type:String,required:[true,'please enter the company building']},
// po_box:{type:String,required:[true,'please enter the company p.o box']},
// location:{type:String,required:[true,'please enter the company location']},
// });
  const policySchema=new Schema({
    name:{type:String,required:[true,'please enter the company name']},
    cost:{type:String,required:[true,'please enter the company detail']},
    detail:{type:String,required:[true,'please enter the website url']},
});

const policy=mongoose.model('policy',policySchema,"policy");
module.exports=policy;