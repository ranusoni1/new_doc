import  Express  from "express";
import * as doctorcontroller from "../controller/doctor.controller.js";


const router=Express.Router();


router.post("/save",doctorcontroller.save);
router.post("/login",doctorcontroller.login);
router.get("/fetch",doctorcontroller.fetch);
router.patch("/update",doctorcontroller.updatedoctor);
router.delete("/delete",doctorcontroller.deletedoctor);


export default router;