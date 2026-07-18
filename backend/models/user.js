//users name a name, email, and password. possibly image link
const mongoose = require("mongoose"); //import mongoose
const validator = require("validator")

//user model
const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        minlength: 2, 
        maxlength: 30,
        required: true, 
        trim: true
    }, 
    
    email: {
        type: String, 
        required: [true, "Email Required!"], 
        validate: {
            validator (value) {
                return validator.isEmail(value);
            }, 
            message: "Email is invalid"
        },
        unique: true, 
        lowercase: true
    }, 

    password: {
        type: String,
        required: [true, 'Password Required!'], 
        select: false //this hides password when data is returned from database
    }
})


module.exports = mongoose.model("User", userSchema)