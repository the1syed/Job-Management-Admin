import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import axios from "axios";
import CreateJobs from "./CreatePage";

const staleJobs = [
  {
    logo: "amazonLogo",
    time: "24h Ago",
    title: "MERN Stack Developer",
    experience: "2-4 yr Exp",
    jobType: "FullTime",
    location: "Remote",
    salary: "15 LPA",
    description: [
      "Build scalable backend APIs using Node.js and MongoDB.",
      "Work on pixel-perfect frontend React apps.",
    ],
  },
  {
    logo: "teslaLogo",
    time: "24h Ago",
    title: "Node Js Developer",
    experience: "1-3 yr Exp",
    jobType: "Contract",
    location: "Hyderabad",
    salary: "12 LPA",
    description: [
      "Develop and maintain scalable server-side logic.",
      "Integrate user-facing elements with server-side logic.",
    ],
  },
  {
    logo: "swiggyLogo",
    time: "24h Ago",
    title: "UX/UI Developer",
    experience: "1-3 yr Exp",
    jobType: "FullTime",
    location: "Bangalore",
    salary: "10 LPA",
    description: [
      "Design modern UI/UX for web and mobile apps.",
      "Collaborate with developers to integrate designs.",
    ],
  },
  {
    logo: "amazonLogo",
    time: "24h Ago",
    title: "Full Stack Developer",
    experience: "1-3 yr Exp",
    jobType: "FullTime",
    location: "Chennai",
    salary: "18 LPA",
    description: [
      "Develop both client and server-side components.",
      "Ensure cross-platform optimization for mobile phones.",
    ],
  },
  {
    logo: "teslaLogo",
    time: "24h Ago",
    title: "Java Backend Developer",
    experience: "3-5 yr Exp",
    jobType: "Contract",
    location: "Bangalore",
    salary: "25 LPA",
    description: [
      "Design REST APIs using Spring Boot.",
      "Implement multi-threaded services.",
    ],
  },
  {
    logo: "swiggyLogo",
    time: "24h Ago",
    title: "UI Intern",
    experience: "0-1 yr Exp",
    jobType: "Internship",
    location: "Hyderabad",
    salary: "15K INR",
    description: [
      "Assist in creating design systems.",
      "Support senior designers in daily tasks.",
    ],
  },
  {
    logo: "amazonLogo",
    time: "24h Ago",
    title: "Frontend Developer",
    experience: "2-4 yr Exp",
    jobType: "PartTime",
    location: "Remote",
    salary: "6 LPA",
    description: [
      "Build responsive web applications using React.",
      "Ensure accessibility standards.",
    ],
  },
  {
    logo: "teslaLogo",
    time: "24h Ago",
    title: "DevOps Engineer",
    experience: "3-6 yr Exp",
    jobType: "FullTime",
    location: "Chennai",
    salary: "30 LPA",
    description: [
      "Maintain CI/CD pipelines and automate deployments.",
      "Monitor infrastructure and performance metrics.",
    ],
  },
  {
    logo: "swiggyLogo",
    time: "24h Ago",
    title: "QA Tester",
    experience: "1-3 yr Exp",
    jobType: "Contract",
    location: "Hyderabad",
    salary: "10K INR",
    description: [
      "Write and execute test cases for web/mobile apps.",
      "Report and track bugs across sprints.",
    ],
  },
  {
    logo: "amazonLogo",
    time: "24h Ago",
    title: "SDE 1",
    experience: "0-2 yr Exp",
    jobType: "FullTime",
    location: "Bangalore",
    salary: "50 LPA",
    description: [
      "Contribute to scalable systems development.",
      "Collaborate with cross-functional engineering teams.",
    ],
  },
  {
    logo: "teslaLogo",
    time: "24h Ago",
    title: "React Native Developer",
    experience: "2-4 yr Exp",
    jobType: "FullTime",
    location: "Remote",
    salary: "22 LPA",
    description: [
      "Build cross-platform mobile apps using React Native.",
      "Integrate with REST APIs and third-party SDKs.",
    ],
  },
  {
    logo: "swiggyLogo",
    time: "24h Ago",
    title: "Graphic Designer",
    experience: "1-2 yr Exp",
    jobType: "PartTime",
    location: "Chennai",
    salary: "5 LPA",
    description: [
      "Design creative assets for social and web.",
      "Maintain brand consistency across platforms.",
    ],
  },
  {
    logo: "amazonLogo",
    time: "24h Ago",
    title: "Product Manager",
    experience: "5-8 yr Exp",
    jobType: "FullTime",
    location: "Bangalore",
    salary: "48 LPA",
    description: [
      "Define product roadmap and feature priorities.",
      "Coordinate with tech and business teams.",
    ],
  },
  {
    logo: "teslaLogo",
    time: "24h Ago",
    title: "Data Analyst",
    experience: "2-4 yr Exp",
    jobType: "Contract",
    location: "Hyderabad",
    salary: "20 LPA",
    description: [
      "Analyze large datasets and present insights.",
      "Build dashboards using Tableau/PowerBI.",
    ],
  },
  {
    logo: "swiggyLogo",
    time: "24h Ago",
    title: "Backend Intern",
    experience: "0-1 yr Exp",
    jobType: "Internship",
    location: "Remote",
    salary: "12K INR",
    description: [
      "Support backend team in building REST APIs.",
      "Fix bugs and write unit tests.",
    ],
  },
  {
    logo: "amazonLogo",
    time: "24h Ago",
    title: "AI/ML Engineer",
    experience: "4-7 yr Exp",
    jobType: "FullTime",
    location: "Chennai",
    salary: "40 LPA",
    description: [
      "Build and deploy ML models to production.",
      "Work with data scientists to refine models.",
    ],
  },
  {
    logo: "teslaLogo",
    time: "24h Ago",
    title: "Cybersecurity Analyst",
    experience: "2-5 yr Exp",
    jobType: "FullTime",
    location: "Bangalore",
    salary: "27 LPA",
    description: [
      "Monitor and respond to security incidents.",
      "Conduct vulnerability assessments.",
    ],
  },
  {
    logo: "swiggyLogo",
    time: "24h Ago",
    title: "Customer Support Intern",
    experience: "0-1 yr Exp",
    jobType: "Internship",
    location: "Chennai",
    salary: "10K INR",
    description: [
      "Assist users through live chat and email.",
      "Maintain high customer satisfaction.",
    ],
  },
  {
    logo: "amazonLogo",
    time: "24h Ago",
    title: "Cloud Architect",
    experience: "6-10 yr Exp",
    jobType: "FullTime",
    location: "Remote",
    salary: "50 LPA",
    description: [
      "Design AWS-based cloud infrastructure.",
      "Ensure high availability and scalability.",
    ],
  },
  {
    logo: "teslaLogo",
    time: "24h Ago",
    title: "Content Writer",
    experience: "1-3 yr Exp",
    jobType: "PartTime",
    location: "Hyderabad",
    salary: "4 LPA",
    description: [
      "Write technical and marketing content.",
      "Optimize for SEO and readability.",
    ],
  },
];

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [jobType, setJobType] = useState("Job Type");
  const [locationType, setLocationType] = useState("Preferred Location");
  const [salary, setSalary] = useState([10000, 90000]);

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3000/api/jobs");

  //       console.log(res.data);
  //       setJobs(res.data);
  //     } catch (error) {
  //       console.log("Error fetching notes", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchJobs();
  // }, []);
  return (
    <div>
      <div className={`min-h-screen ${showModal ? "blurred-bg" : ""}`}>
        <Navbar
          onCreateJobClick={handleOpenModal}
          jobType={jobType}
          setJobType={setJobType}
          locationType={locationType}
          setLocationType={setLocationType}
          salary={salary}
          setSalary={setSalary}
        />
        {/* <Body jobs={jobs}/> */}
        <Body
          jobs={staleJobs}
          jobType={jobType}
          locationType={locationType}
          salary={salary}
        />
      </div>
      {showModal && <CreateJobs onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Homepage;
