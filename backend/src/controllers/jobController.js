import Job from "../model/Job.js";

export async function getAllJobs(req, res) {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    console.log("Error in getAllJobs Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getJobById(req, res) {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    console.log("Error in getJobById Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createJobs(req, res) {
  try {
    const {
      title,
      company,
      location,
      jobType,
      salaryLow,
      salaryHigh,
      deadline,
      jobDesc,
    } = req.body;
    const job = new Job({
      title,
      company,
      location,
      jobType,
      salaryLow,
      salaryHigh,
      deadline,
      jobDesc,
    });
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (error) {
    console.log("Error in createJobs controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateJobs(req, res) {
  try {
    const {
      title,
      company,
      location,
      jobType,
      salaryLow,
      salaryHigh,
      deadline,
      jobDesc,
    } = req.body;
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      {
        title,
        company,
        location,
        jobType,
        salaryLow,
        salaryHigh,
        deadline,
        jobDesc,
      },
      { new: true }
    );
    if (!updatedJob) {
      return res.status(404).json({ message: "Job Not Found" });
    }
    res.status(200).json(updatedJob);
  } catch (error) {
    console.log("Error in updateJobs Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteJobs(req, res) {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) {
      res.status(404).json({ message: "Job not found" });
    }
    return res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    console.log("Error in deleteJob controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
