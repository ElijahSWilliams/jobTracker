const mongoose = require("mongoose"); 
const validator = require("validator")

const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [ true, "Company Name Required!" ],
        trim: true
    },  

    position: {
        type: String, 
        required: [true, "Position Required!"], 
        trim: true
    }, 

    dateAdded: {
        type: Date,
        default: Date.now 
    }, 
    
    status: {
        type: String,  
        required: true,
        enum: ["Saved", "Applied", "Interviewing" ,"Offer", "Rejected"], 
        default: "Saved"
    }, 

    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    }

}) 

module.exports = mongoose.model("Job", jobSchema)