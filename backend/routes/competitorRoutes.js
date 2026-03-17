import express from "express";
import { analyzeCompetitor } from "../controllers/competitorController.js";

const router = express.Router();

router.post("/competitor", analyzeCompetitor);

export default router;