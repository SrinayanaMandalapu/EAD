const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    rollno:{
        type : Number,
        required : true
    },
    branch:{
        type : String,
        required : true
    },
    mobile:{
        type : Number,
        required : true
    },
    feeReimbersement:{
        type : Boolean,
        required : true,
        default: false
    }
})

module.exports =  mongoose.model("Student", studentSchema);
