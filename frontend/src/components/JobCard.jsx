import React from "react";
import "./JobCard.css";
import { assets } from "../assets/assets";

const JobCard = ({
  logo = assets.amazonLogo,
  time = "24h Ago",
  title = "Full Stack Developer",
  experience = "1-3 yr Exp",
  jobType = "Onsite",
  salary = "12 LPA",
  description = [],
  onApplyClick,
}) => {
  return (
    <div className="jobCard">
      <div className="jobLogo">
        <img className="jobLogoImg" src={logo} />
      </div>
      <div className="jobTime">
        <div className="jobTimeText">{time}</div>
      </div>
      <div className="jobTitle"> {title}</div>
      <div className="exp-sal-ons">
        <div className="experience">
          <div className="experinceicon">
            <img src={assets.experience} />
          </div>
          <div className="experiencetext">{experience}</div>
        </div>
        <div className="onsite">
          <div className="onsiteicon">
            <img src={assets.onsite} />
          </div>
          <div className="onsiteText">{jobType}</div>
        </div>
        <div className="salary">
          <div className="salaryicon">
            <img src={assets.salary} />
          </div>
          <div className="salaryText">{salary}</div>
        </div>
      </div>
      <div className="jobdesc">
        <ul>
          {description.map((point, index) => {
            return <li key={index}>{point}</li>;
          })}
        </ul>
      </div>
      <button className="applybutton">
        <div className="applybuttontext" onClick={()=>onApplyClick()}>Apply Now</div>
      </button>
    </div>
  );
};

export default JobCard;
