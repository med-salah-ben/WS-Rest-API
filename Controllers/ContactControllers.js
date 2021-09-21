const Contact =require("../models/ContactModel")

exports.PostContact = async(req,res)=>{
    try {
          // create a new contact with the model contact
    const newContact = new Contact(req.body)
    // test if the user has an email
    if(!req.body.email){
        res.status(400).send("email is required")
        return;
    }
    // test if email exist
    const user = await Contact.findOne({email:req.body.email})
    if(user){
        res.status(400).send('email already exist')
        return
    }
    const response = await newContact.save()
    res.status(200).send({response:response,msg:"user is saved"})
    } catch (err) {
        res.status(500).send({msg:"can not save user"})
    }
}