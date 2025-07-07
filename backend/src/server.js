import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import path from "path";

import { connectDB } from "./config/db.js";
import jobRoute from "./routes/jobRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
// const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
});

app.use(express.json());
app.use(rateLimiter);
if (process.env.NODE_ENV != "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use("/api/jobs", jobRoute);
