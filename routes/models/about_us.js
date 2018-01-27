const mongoose=require('mongoose');
const Schema=mongoose.Schema;
// const addresSchema=new Schema({
// group:{type:String,required:[true,'please enter the group']},
// building:{type:String,required:[true,'please enter the company building']},
// po_box:{type:String,required:[true,'please enter the company p.o box']},
// location:{type:String,required:[true,'please enter the company location']},
// });
  const aboutSchema=new Schema({
    company_name:{type:String,required:[true,'please enter the company name']},
    company_detail:{type:String,required:[true,'please enter the company detail']},
    website_url:{type:String,required:[true,'please enter the website url']},
    group:{type:String,required:[true,'please enter the group']},
    building:{type:String,required:[true,'please enter the company building']},
    po_box:{type:String,required:[true,'please enter the company p.o box']},
    location:{type:String,required:[true,'please enter the company location']},
});

const about_us=mongoose.model('about_us',aboutSchema,"about_us");
module.exports=about_us;