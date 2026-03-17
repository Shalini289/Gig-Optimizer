import express from "express";
import { analyzeGig } from "../controllers/analyzeController.js";

const router = express.Router();

router.post("/analyze", analyzeGig);

export default router;