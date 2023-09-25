import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const subcategoryschema =mongoose.Schema({
    _id:Number,
    catname:{
     type:String,
     lowercase:true,
     required:[true,"category name is required"],
     unique:true,
     trim:true
    },

    subcatname:{
        type:String,
        lowercase:true,
        required:[true,"subcategory name is required"],
        unique:true,
        trim:true
       },

    subcaticonname: {
        type: String,
        required: [true,"subCategory icon name is required"],
        lowercase: true,
        trim: true
      }
});

 // Apply the uniqueValidator plugin to UserSchema.
 subcategoryschema.plugin(mongooseUniqueValidator);

 const subcategoryschemaModel=mongoose.model('subcategory_collection',subcategoryschema);

 export default subcategoryschemaModel;