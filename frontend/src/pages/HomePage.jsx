import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import axios from "axios";
import CreateJobs from "./CreatePage";

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/jobs");

        console.log(res.data);
        setJobs(res.data);
      } catch (error) {
        console.log("Error fetching notes", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  return (
    <div>
      <div className={`min-h-screen ${showModal ? "blurred-bg" : ""}`}>
        <Navbar onCreateJobClick={handleOpenModal} />
        <Body />
      </div>
      {showModal && <CreateJobs onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Homepage;
