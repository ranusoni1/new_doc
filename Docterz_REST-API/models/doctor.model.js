import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const doctorschema=mongoose.Schema({

    _id:Number,

    name:{
        type:String,
        required:[true,"name is required"],
        lowercase:true,
        trim:true
    },

    experience:{
        type:Number,
        required:[true,"experience is required"],
        trim:true
    },

    email:{
        type:String,
        required:[true,"email is required"],
        lowercase:true,
        unique:true,
        trim:true
        
    },

    specialization:{
        type:String,
        required:[true,"specialization is required"],
        lowercase:true
    },

    designation:{
        type:String,
        required:[true,"designation is required"],
        lowercase:true
    },

    personalmobile:{
        type:Number,
        trim:true,
        required:[true,"personalmobile is required"],
        maxlength:10
    },

    clinicmobile:{
        type:Number,
        required:[true,"clinicmobile is required"],
        trim:true,
        maxlength:10
    },

    clinicaddress:{
        type:String,
        required:[true,"clinicaddress is required"],
        lowercase:true,
        trim:true
    },

    residentialaddress:{
        type:String,
        required:[true,"residentialaddress is required"],
        lowercase:true,
        trim:true
    },
    contactdescription:{
        type:String,
        required:[true,"contactdescription is required"],
        lowercase:true,
        trim:true
    },
    password:String,
    role:String,
    status:Number,
    info:String


});

doctorschema.plugin(mongooseUniqueValidator);

const doctorschemamodel=mongoose.model("doctor_collection",doctorschema);

export default doctorschemamodel;
