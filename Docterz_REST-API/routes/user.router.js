import express from 'express';
import * as usercontroller from '../controller/user.controller.js';

const router=express.Router();

router.post("/save",usercontroller.save);
router.post("/login",usercontroller.login);
router.get("/fetch",usercontroller.fetch);
router.patch("/update",usercontroller.updateuser);
router.delete("/delete",usercontroller.deleteuser);

export default router;