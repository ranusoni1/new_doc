import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const categoryschema =mongoose.Schema({
    _id:Number,
    catname:{
     type:String,
     lowercase:true,
     required:[true,"category name is required"],
     unique:true,
     trim:true
    },

    caticonname: {
        type: String,
        required: [true,"Category icon name is required"],
        lowercase: true,
        trim: true
      }
});

 // Apply the uniqueValidator plugin to UserSchema.
 categoryschema.plugin(mongooseUniqueValidator);

 const categoryschemaModel=mongoose.model('category_collection',categoryschema);

 export default categoryschemaModel;