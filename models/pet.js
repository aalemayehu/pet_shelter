const mongoose = require ("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema ({
    Name: {
        type:String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"],
        unique:true,
    },
    Type: {
        type:String,
        required: [true, "Type of Pet is required"],
        minlength: [3, "Type must be at least 3 characters long"],
    },
    Description: {
        type:String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be at least 3 characters long"],
    },
    Skill_1: {
        type:String,
    },
    Skill_2: {
        type:String,
    },
    Skill_3: {
        type:String,
    },
    Count:{
        type:Number,
    }
}, {timestamps:true});

PetSchema.plugin(uniqueValidator);
mongoose.model("Pet", PetSchema);
