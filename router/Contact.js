const express =require("express")
const Router = express.Router()
const Contact = require('../models/ContactModel')
const Controllers = require("../Controllers/ContactControllers")

//testing routes 
Router.get("/hello",(req,res)=>{
    res.send("Hello World From Routes")
})

//Post Contact 
Router.post("/post",Controllers.PostContact)

//Get All Contacts

Router.get("/",async(req,res)=>{
    try {
        const result = await Contact.find();
        res.status(200).send({result,msg:"Get Contacts Success"})
    } catch (err) {
        res.status(400).send({msg:"can not get Contacts"})
    }
   
})

//Get Contact With Id
Router.get("/:id",async(req,res)=>{
    try {
        const result = await Contact.findOne({_id:req.params.id});
        res.status(200).send({result,msg:"Get Contacts Success"})
    } catch (err) {
        res.status(400).send({msg:"can not find contact with this id"})
    }
   
})

//Delete Contact By ID

Router.delete("/:id",async(req,res)=>{
    try{
         await Contact.deleteOne({_id:req.params.id})
        
        res.status(200).send({msg:"Contact Deleted"})
        
    }catch(err){
        res.status(400).send({msg:"Can Not find This Id"})
    }

})

//Update Contact By ID

Router.put("/:id",async(req,res)=>{
    try{
         await Contact.updateOne({_id:req.params.id}, {$set : {...req.body}})
        
        res.status(200).send({msg:"Contact Updated"})
        
    }catch(err){
        res.status(400).send({msg:"Can Not find This Id"})
    }

})

module.exports= Router