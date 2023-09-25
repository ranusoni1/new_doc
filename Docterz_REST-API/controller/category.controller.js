import '../models/connection.js';
import url from 'url';

import categoryschemaModel from '../models/category.model.js';

export const save=async(req,res,next)=>{
   var clist= await categoryschemaModel.find().sort({_id:-1});
   var _id =clist.length==0?1:clist[0]._id+1;
   var cdetails={...req.body,"_id":_id};
   try
   {
    await categoryschemaModel.create(cdetails);
    res.status(201).json({"status":true});
   }
   catch(err)
   {
     console.log(err);
     res.status(500).json({"status":false});
   }
}

export const fetch=async(req,res,next)=>{
    var condition_obj=url.parse(req.url,true).query;
    var categorylist=await categoryschemaModel.find(condition_obj);
    if(categorylist.length!=0)
    res.status(201).json(categorylist);
    else
    res.status(404).json({error:"resource not found"});
}

export const deletecategory =async(req,res,next)=>{
    var condition_obj= JSON.parse(req.body.condition_obj);
    var category = await categoryschemaModel.find(condition_obj);
    console.log(category);
    if(category.length!=0){
    let result= await categoryschemaModel.deleteMany(condition_obj);
    if(result)
    res.status(201).json({"msg":"record deleted successfully...."});
     else
     res.status(500).json({error:"server error"});
    }
    else
    res.status(404).json({error:"resource not found"});
}


export const updatecategory=async(req,res,next)=>{
    let cdetails= await categoryschemaModel.findOne(JSON.parse(req.body.condition_obj));
    if(cdetails)
    {
        let category= await categoryschemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set:JSON.parse(req.body.content_obj)});

        if(category)
        res.status(201).json({"msg":"record updated successfully"});
        else
        res.status(500).json({error:"server error"});
    }
    else
    res.status(404).json({error:"resource not found"});
}