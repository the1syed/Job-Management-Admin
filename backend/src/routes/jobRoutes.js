import express from "express";
import {
  createJobs,
  deleteJobs,
  getAllJobs,
  getJobById,
  updateJobs,
} from "../controllers/jobController.js";

const jobRoute = express.Router();

jobRoute.get("/:id", getJobById);

jobRoute.get("/", getAllJobs);

jobRoute.post("/", createJobs);

jobRoute.put("/:id", updateJobs);

jobRoute.delete("/:id", deleteJobs);

export default jobRoute;
