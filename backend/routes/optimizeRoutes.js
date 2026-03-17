import express from "express";
import { optimizeGig } from "../controllers/optimizeController.js";

const router = express.Router();

router.post("/optimize", optimizeGig);
router.get("/test",(req,res)=>{
res.send("API working");
});
export default router;