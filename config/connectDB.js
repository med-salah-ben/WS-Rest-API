const mongoose = require("mongoose")
DB_URI = 'mongodb://localhost:27017/ContactAPI'

const connectDB = async()=>{
    try {
        await  mongoose.connect(DB_URI, {useNewUrlParser: true,useUnifiedTopology: true});
        console.log("DataBase Connected")
     
    } catch (err) {
        console.log(`DataBase Failed To Connect ${err}`)
    }


}

module.exports = connectDB