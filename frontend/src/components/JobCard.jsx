import React from "react";
import "./JobCard.css";
import { assets } from "../assets/assets";

const JobCard = () => {
  return (
    <div className="jobCard">
      <div className="jobLogo">
        <img src={assets.amazonLogo} />
      </div>
      <div className="jobTime">
        <div className="jobTimeText">24h Ago</div>
      </div>
      <div className="jobTitle"> Full Stack Developer</div>
      <div className="exp-sal-ons">
        <div className="experience">
          <div className="experinceicon">
            <img src={assets.experience} />
          </div>
          <div className="experiencetext">1-3 yr Exp</div>
        </div>
      </div>
      <div className="experienceicon"></div>
    </div>
  );
};

export default JobCard;
