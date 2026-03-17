import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import optimizeRoutes from "./routes/optimizeRoutes.js";
import analyzeRoutes from "./routes/analyzeRoutes.js";




const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api", optimizeRoutes);
app.use("/api", analyzeRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});