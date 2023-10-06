import '../models/connection.js';
import url from 'url';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';

import doctorschemamodel from '../models/doctor.model.js';
import doctorsendmail from '../controller/doctormail_api.controller.js'
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const save = async (req, res, next) => {

// console.log(req.body)   
// console.log(req.files)
   var doctorlist = await (doctorschemamodel.find().sort({ _id: [-1] }))
   var _id = doctorlist.length == 0 ? 1 : doctorlist[0]._id + 1;
   var pwd = rs.generate(7);

   var fileobj = req.files.profilepic;
   var filename = rs.generate(10) + "-" + Date.now() + "-" + fileobj.name;

   var uploadpath = path.join(__dirname, "../../Docterz_UI/public/assets/uploads/profilepic", filename);
   fileobj.mv(uploadpath);

   var docdetails = { ...req.body, "profilepic":filename ,"_id": _id, "status": 0, "role": "doctor", "password": pwd, "info": Date() }
   //console.log(docdetails)
   try {
      var doctor = await doctorschemamodel.create(docdetails);
      doctorsendmail(doctor.email, doctor.password)
      res.status(201).json({ "status": true });
   }
   catch (err) {
      console.log(err);
      res.status(500).json({ "status": false });
   }
}


export const login = async (req, res, next) => {
   var condition_obj = { ...req.body, "status": 1 };
   var userlist = await doctorschemamodel.find(condition_obj);

   if (userlist.length != 0) {
      var payload = { 'email': userlist[0].email }
      var key = rs.generate();
      var token = jwt.sign(payload, key);
      res.status(201).json({ "status": true, "token": token, "docsdetails": userlist[0] });
   }
   else {
      res.status(404).json({ "status": false, "token": "error" });
   }
};

export const fetch = async (req, res, next) => {
   var condition_obj = url.parse(req.url, true).query;
   var doclist = await doctorschemamodel.find(condition_obj)

   if (doclist.length != 0) {
      res.status(201).json(doclist);
   }
   else {
      res.status(500).json({ "result": "server error" })
   }
}

export const updatedoctor = async (req, res, next) => {
   let docdetails = await doctorschemamodel.findOne((req.body.condition_obj));

   if (docdetails) {
      let doctor = await doctorschemamodel.updateOne((req.body.condition_obj), { $set: (req.body.content_obj) })

      if (doctor)
         res.status(201).json({ "msg": "record updated sucessfully" });
      else
         res.status(500).json({ error: "server error" });
   }
   else
      res.status(404).json({ error: "requested resources not found" });
}

export const deletedoctor = async (req, res, next) => {
   var condition_obj = (req.body);
   var doctor = doctorschemamodel.find(condition_obj)
   if (doctor.length != 0) {
      let result = await doctorschemamodel.deleteMany(condition_obj);
      if (result)
         res.status(201).json({ "msg": "record deleted successfully" });
      else
         res.status(500).json({ error: "server error" });
   }
   else
      res.status(404).json({ error: "requested resources not found" });

};

