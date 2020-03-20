const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Must have pet name"],
        minlength: [3, "Pet name needs to be longer than 3 letters"],
    },
    type:{
        type:String,
        required:[true, "Must have pet type"],
        minlength: [3, "Type needs to be longer than 3 letters"]
    },
    description:{
        type:String,
        required:[true, "Must have pet description"],
        minlength: [3, "Description needs to be longer than 3 letters"]
    },
    skill:[]
},{timestamps:true})

const Pet = mongoose.model("Pet", PetSchema)
module.exports = Pet