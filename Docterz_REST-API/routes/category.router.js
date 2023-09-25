import express from 'express';
import * as categorycontroller from '../controller/category.controller.js'

const router=express.Router();

router.post("/save",categorycontroller.save);
router.get("/fetch",categorycontroller.fetch);
router.delete("/delete",categorycontroller.deletecategory);
router.patch("/update",categorycontroller.updatecategory);

export default router;
