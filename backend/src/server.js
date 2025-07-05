import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import jobRoute from "./routes/jobRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
});

app.use(express.json());
app.use(rateLimiter);
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use("/api/jobs", jobRoute);
