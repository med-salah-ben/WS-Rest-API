const mongoose =require('mongoose')
const {Schema, model} = mongoose

const ContactSchema = new Schema({ 
    name: {type:String,required:true},
    email:{type:String},
    phone:{type:String}
});
const Contact = model('contacts', ContactSchema);

module.exports = Contact