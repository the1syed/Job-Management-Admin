import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import RangeSlider from "./Slider";

const Navbar = () => {
  const [salary, setSalary] = useState([50000, 80000]);
  return (
    <header>
      <div className="navbar">
        <div className="menubar">
          <div className="innermenu">
            <Link to="/" className="logo-link">
              <img className="logo" src={assets.logo} alt="Logo" />
            </Link>
            <div className="menuoptions ">
              <div className="homebox">
                <div className="homeinner">
                  <Link to="/" className="hometext">
                    Home
                  </Link>
                </div>
              </div>
              <div className="findjobsbox">
                <div className="findjobsinner">
                  <div className="findjobstext">
                    <Link to="/findjobs">Find Jobs</Link>
                  </div>
                </div>
              </div>
              <div className="findtalentbox">
                <div className="findtalentinner">
                  <div className="findtalenttext">
                    <Link to="/findtalents">Find Talents</Link>
                  </div>
                </div>
              </div>
              <div className="aboutusbox">
                <div className="aboutusinner">
                  <div className="aboutustext">
                    <Link to="/aboutus">About Us</Link>
                  </div>
                </div>
              </div>
              <div className="testimonialsbox">
                <div className="testimonialsinner">
                  <div className="testimonialstext">
                    <Link to="/testimonial">Testimonial</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="createjobbox">
              <button className="createjobinner">
                <span className="create-text">Create Job</span>
                <span className="login-text">Login</span>
              </button>
            </div>
          </div>
        </div>

        <div className="filterbar">
          <div className="filter-item">
            <img className="searchicon" src={assets.searchicon} alt="Search" />
            <input
              className="searchBar"
              type="text"
              placeholder="Search By Job Title, Role"
            />
          </div>
          <div className="verticalline"></div>
          <div className="filter-item">
            <img
              className="locationicon"
              src={assets.location}
              alt="Location"
            />

            <span className="plocation">Preferred Location</span>
            {/* Optionally, a dropdown here */}
          </div>
          <div className="verticalline"></div>
          <div className="filter-item">
            <img className="jobtypeicon" src={assets.jobType} alt="Job Type" />
            <span className="jobtypeText">Job type</span>
            {/* Optionally, a dropdown here */}
          </div>
          <div className="filter-item salary-slider">
            <span className="salary-label">Salary Per Month</span>
            <RangeSlider
              sx={{ width: 200, height: 1 }}
              value={salary}
              onChange={(e, newValue) => setSalary(newValue)}
              min={0}
              max={200000}
              step={1000}
              valueLabelDisplay="auto"
              getAriaLabel={() => "Salary Range"}
            />
            <span className="salary-label">
              ₹{salary[0] / 1000}k - ₹{salary[1] / 1000}k
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
