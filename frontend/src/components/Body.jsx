import React from "react";
import "./Body.css";
import JobCard from "./JobCard";

const Body = () => {
  return (
    <div className="body">
      <div className="jobCardOuter">
        <div className="jobCardUpper">
          <JobCard />
          <br></br>
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </div>
  );
};

export default Body;
