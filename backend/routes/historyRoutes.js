import express from "express";
import Gig from "../models/Gig.js";

const router = express.Router();

router.get("/history", async (req,res)=>{

const gigs = await Gig.find().sort({createdAt:-1});

res.json(gigs);

});

export default router;