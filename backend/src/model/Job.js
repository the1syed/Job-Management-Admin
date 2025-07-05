import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    jobType: { type: String, required: true },
    salaryLow: { type: Number, required: true },
    salaryHigh: { type: Number, required: true },
    deadline: { type: Date, required: true },
    jobDesc: { type: String, required: true },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;