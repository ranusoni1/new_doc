import express from 'express';
import * as subcategorycontroller from '../controller/subcategory.controller.js';

const router=express.Router();

router.post("/save",subcategorycontroller.save);
router.get("/fetch",subcategorycontroller.fetch);
router.delete("/delete",subcategorycontroller.deletesubcategory);
router.patch("/update",subcategorycontroller.updatesubcategory);

export default router;

