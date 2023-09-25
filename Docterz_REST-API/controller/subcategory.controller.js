import '../models/connection.js';
import url from 'url';

import subcategoryschemaModel from '../models/subcategory.model.js';

export const save=async(req,res,next)=>{
   var subclist= await subcategoryschemaModel.find().sort({_id:-1});
   var _id =subclist.length==0?1:subclist[0]._id+1;
   var subcdetails={...req.body,"_id":_id};
   try
   {
    await subcategoryschemaModel.create(subcdetails);
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
    var subcategorylist=await subcategoryschemaModel.find(condition_obj);
    if(subcategorylist.length!=0)
    res.status(201).json(subcategorylist);
    else
    res.status(404).json({error:"resource not found"});
}

export const deletesubcategory =async(req,res,next)=>{
    var condition_obj= JSON.parse(req.body.condition_obj);
    var subcategory = await subcategoryschemaModel.find(condition_obj);
    console.log(subcategory);
    if(subcategory.length!=0){
    let result= await subcategoryschemaModel.deleteMany(condition_obj);
    if(result)
    res.status(201).json({"msg":"record deleted successfully...."});
     else
     res.status(500).json({error:"server error"});
    }
    else
    res.status(404).json({error:"resource not found"});
}


export const updatesubcategory=async(req,res,next)=>{
    let subcdetails= await subcategoryschemaModel.findOne(JSON.parse(req.body.condition_obj));
    if(subcdetails)
    {
        let subcategory= await subcategoryschemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set:JSON.parse(req.body.content_obj)});

        if(subcategory)
        res.status(201).json({"msg":"record updated successfully"});
        else
        res.status(500).json({error:"server error"});
    }
    else
    res.status(404).json({error:"resource not found"});
}