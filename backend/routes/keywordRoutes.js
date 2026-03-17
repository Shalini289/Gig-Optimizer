import express from "express";
import { generateKeywords } from "../controllers/keywordController.js";

const router = express.Router();

router.post("/keywords", generateKeywords);

export default router;