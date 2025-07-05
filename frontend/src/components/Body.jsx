import React from "react";
import "./Body.css";
import JobCard from "./JobCard";
import { assets } from "../assets/assets";

const Body = () => {
  return (
    <div className="body">
      <div className="jobCardOuter">
        <div className="jobCardUpper">
          <JobCard
            logo={assets.amazonLogo}
            time="24h Ago"
            title="MERN Stack Developer"
            experience="2-4 yr Exp"
            jobType="Remote"
            salary="15 LPA"
            description={[
              "Build scalable backend APIs using Node.js and MongoDB.",
              "Work on pixel-perfect frontend React apps.",
            ]}
            onApplyClick={() => alert("Applied to MERN Stack Developer")}
          />
          <JobCard
            logo={assets.teslaLogo}
            time="24h Ago"
            title="Node Js Developer"
            experience="1-3 yr Exp"
            jobType="Onsite"
            salary="12 LPA"
            description={[
              "A user-friendly interface lets you browse stunning photos and videos",
              "Filter destinations based on interests and travel style, and create personalized",
            ]}
            onApplyClick={() => alert("Applied to Node Js Developer")}
          />
          <JobCard
            logo={assets.swiggyLogo}
            time="24h Ago"
            title="UX/UI Developer"
            experience="1-3 yr Exp"
            jobType="Onsite"
            salary="12 LPA"
            description={[
              "A user-friendly interface lets you browse stunning photos and videos",
              "Filter destinations based on interests and travel style, and create personalized",
            ]}
            onApplyClick={() => alert("Applied to UX/UI Developer")}
          />
          <JobCard
            logo={assets.amazonLogo}
            time="24h Ago"
            title="Full Stack Developer"
            experience="1-3 yr Exp"
            jobType="Onsite"
            salary="12 LPA"
            description={[
              "A user-friendly interface lets you browse stunning photos and videos",
              "Filter destinations based on interests and travel style, and create personalized",
            ]}
            onApplyClick={() => alert("Applied to Full Stack Developer")}
          />
        </div>
        <div className="jobCardUpper">
          <JobCard
            logo={assets.teslaLogo}
            time="24h Ago"
            title="Java Backend Developer"
            experience="3-5 yr Exp"
            jobType="Onsite"
            salary="18 LPA"
            description={[
              "Design and implement REST APIs using Spring Boot.",
              "Optimize backend services and databases for performance.",
            ]}
            onApplyClick={() => alert("Applied to Java Backend Developer")}
          />
          <JobCard
            logo={assets.swiggyLogo}
            time="24h Ago"
            title="UX/UI Developer"
            experience="1-3 yr Exp"
            jobType="Onsite"
            salary="12 LPA"
            description={[
              "A user-friendly interface lets you browse stunning photos and videos",
              "Filter destinations based on interests and travel style, and create personalized",
            ]}
            onApplyClick={() => alert("Applied to UX/UI Developer")}
          />
          <JobCard
            logo={assets.amazonLogo}
            time="24h Ago"
            title="Full Stack Developer"
            experience="1-3 yr Exp"
            jobType="Onsite"
            salary="12 LPA"
            description={[
              "A user-friendly interface lets you browse stunning photos and videos",
              "Filter destinations based on interests and travel style, and create personalized",
            ]}
            onApplyClick={() => alert("Applied to Full Stack Developer")}
          />
          <JobCard
            logo={assets.teslaLogo}
            time="24h Ago"
            title="Node Js Developer"
            experience="1-3 yr Exp"
            jobType="Onsite"
            salary="12 LPA"
            description={[
              "A user-friendly interface lets you browse stunning photos and videos",
              "Filter destinations based on interests and travel style, and create personalized",
            ]}
            onApplyClick={() => alert("Applied to Node Js Developer")}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
