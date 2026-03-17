import express from "express";
import { generateTitles } from "../controllers/titleController.js";

const router = express.Router();

router.post("/titles", generateTitles);

export default router;