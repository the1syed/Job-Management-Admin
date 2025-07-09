import React from "react";
import "./Body.css";
import JobCard from "./JobCard";
import { assets } from "../assets/assets";

function parseSalary(salaryStr) {
  // Examples: "15 LPA", "10K INR", "50 LPA"
  if (!salaryStr) return 0;

  const lower = salaryStr.toLowerCase().trim();

  if (lower.includes("lpa")) {
    // LPA = Lakhs per annum
    // Convert to INR per month: 1 LPA = 100000 INR / 12 months ≈ 8333.33
    const num = parseFloat(lower.replace("lpa", "").trim());
    return Math.round((num * 100000) / 12);
  } else if (lower.includes("k")) {
    // K INR = Thousand INR (assuming monthly)
    const num = parseFloat(lower.replace("k", "").replace("inr", "").trim());
    return Math.round(num * 1000);
  } else {
    // fallback if format unknown: parse number only
    const num = parseFloat(lower.replace(/[^0-9.]/g, ""));
    return isNaN(num) ? 0 : num;
  }
}

const Body = ({ jobs, jobType, locationType, salary, searchTerm }) => {
  const term = searchTerm.trim().toLowerCase();
  const filteredJobs = jobs.filter((job) => {
    const jobSalary = parseSalary(job.salary);
    // filter by type, location, salary
    const matchesType = jobType === "Job Type" || job.jobType === jobType;
    const matchesLocation =
      locationType === "Preferred Location" || job.location === locationType;
    const matchesSalary = jobSalary >= salary[0] && jobSalary <= salary[1];
    // filter by search term in title or description points
    const inTitle = job.title.toLowerCase().includes(term);
    const inDesc = job.description.some((point) =>
      point.toLowerCase().includes(term)
    );
    const matchesSearch = term === "" || inTitle || inDesc;

    return matchesType && matchesLocation && matchesSalary && matchesSearch;
  });
  return (
    <div className="body">
      <div className="jobCardOuter">
        <div className="jobCardUpper">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.title + job.location}
              logo={assets[job.logo]}
              time={job.time}
              title={job.title}
              experience={job.experience}
              jobType={job.jobType}
              salary={job.salary}
              description={job.description}
              onApplyClick={() => alert(`Applied to ${job.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
