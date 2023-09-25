import '../models/connection.js';
import url from 'url';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';

import userschemaModel from '../models/user.model.js';
import usersendmail from './usermail_api.controller.js';


export const save=async(req,res,next)=>{
 var userlist=await userschemaModel.find().sort({_id:-1});
 var _id=userlist.length==0?1:userlist[0]._id+1;
 var userdetails={...req.body,"_id":_id,"status":0,"role":"user","info":Date()};
 //res.send("test");
 try
 {
    var user=await userschemaModel.create(userdetails);
    usersendmail(user.email,user.password)
    //console.log(user);
    res.status(201).json({"status":true});
 }
 catch(err)
 {
  console.log(err);
  res.status(500).json({"status":false});
 }
}

export const login =async(req,res,next)=>{
   var condition_obj={...req.body,"status":1};
   var userlist=await userschemaModel.find(condition_obj);
   //console.log(userlist);

   if(userlist.length!=0)
   {
      
      var payload={"email":userlist[0].email};
      var key=rs.generate();
      var token=jwt.sign(payload,key);
      res.status(201).json({"status":true,"token":token,"userdetails":userlist[0]});
   }

   else
   res.status(404).json({"status":false,"token":"error"});
}

export const fetch=async (req,res,next)=>{
 var condition_obj=url.parse(req.url,true).query;
 var userlist=await userschemaModel.find(condition_obj);
 //console.log(userlist);
 if(userlist.length!=0)
 res.status(201).json(userlist);
else
res.status(500).json({"result":"server err"});
}

export const updateuser=async(req,res,next)=>{
 let userdetails= await userschemaModel.findOne((req.body.condition_obj));
 if(userdetails)
 {
   let user=await userschemaModel.updateOne ((req.body.condition_obj),{$set:(req.body.content_obj)});
   if(user)
    res.status(201).json({"msg":"record updated sucessfully"});
   else
   res.status(500).json({error:"server error"});
 }
 else
 res.status(404).json({error:"requested resources not found"});
}

export const deleteuser=async(req,res,next)=>{
   var condition_obj=(req.body);
  
   var user= await userschemaModel.find(condition_obj);
   //console.log(condition_obj)
   if(user.length!=0)
   {
     let result= await userschemaModel.deleteMany(condition_obj);
     if(result)
     res.status(201).json({"msg":"record deleted successfully"});
     else
     res.status(500).json({error:"server error"});
   }
   else
 res.status(404).json({error:"requested resources not found"});

}