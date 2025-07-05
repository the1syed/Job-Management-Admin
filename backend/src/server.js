import express from "express";
import { connectDB } from "./config/db.js";
import jobRoute from "./routes/jobRoutes.js";
import dotenv from "dotenv";
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
app.use("/api/jobs", jobRoute);
