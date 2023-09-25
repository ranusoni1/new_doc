import mongoose from 'mongoose';
import uniquevalidator from 'mongoose-unique-validator';

const userschema =mongoose.Schema({
 _id:Number,
 name :{
    type:String,
    required:[true,"name is required"],
    lowercase:true,
    trim:true
 },
   
  email:{
    type:String,
    required:[true,"email is required"],
    unique:true,
    lowercase:true,
    trim:true

  },
   
   password:{
    type:String,
    required:[true,"password  is required"],
    maxlength:10,
    minlength:5,
    trim:true
   },

  mobile:{
    type: String,
    required: [true,"Mobile is required"],
    trim: true
  },

  address:{
    type: String,
    required: [true,"Address is required"],
    trim: true
  },
   
  city:{
    type: String,
    required: [true,"City is required"],
    trim: true
  },

  gender:{
    type: String,
    required: [true,"Gender is required"],
  },

   role:String,
   status:Number,
   info:String
});

//Apply the uniqueValidator plugin to UserSchema.
userschema.plugin(uniquevalidator);

//Compile schema to model
const userschemaModel =mongoose.model('user_collection',userschema);

export default userschemaModel;