import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import RangeSlider from "./Slider";

// ...imports and assets

const Navbar = ({ onCreateJobClick }) => {
  const [jobTypeOpen, setJobTypeOpen] = useState(false);
  const [jobType, setJobType] = useState("Job Type");
  const [locationTypeOpen, setlocationTypeOpen] = useState(false);
  const [locationType, setLocationType] = useState("Preferred location");
  const [salary, setSalary] = useState([50000, 80000]);

  return (
    <header>
      <div className="navbar">
        <div className="menubar">
          <div className="innermenu">
            <Link to="/" className="logo-link">
              <img className="logo" src={assets.logo} alt="Logo" />
            </Link>
            <div className="menuoptions">
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
              {/* ...menu items as before */}
            </div>
            <div className="createjobbox">
              <button onClick={onCreateJobClick} className="createjobinner">
                <span className="create-text">Create Job</span>
                <span className="login-text">Login</span>
              </button>
            </div>
          </div>
        </div>

        <div className="filterbar">
          {/* SEARCH BAR */}
          <div className="filter-item search-filter">
            <div className="searchBarWrapper">
              <img
                className="searchicon"
                src={assets.searchicon}
                alt="Search"
              />
              <input
                className="searchBar"
                type="text"
                placeholder="Search By Job Title, Role"
                default="Search By Job Title, Role"
              />
            </div>
          </div>
          <div className="verticalline"></div>
          {/* LOCATION */}
          <div className="filter-item">
            <img
              className="jobtypeicon"
              src={assets.location}
              alt="Preffered Location"
            />
            <div className="custom-dropdown">
              <div
                className="dropdown-toggleLocation"
                onClick={() => setlocationTypeOpen((prev) => !prev)}
              >
                <span className="locationfont">{locationType}</span>
                <img
                  className="dropdown-icon"
                  src={assets.down}
                  alt="Down Arrow"
                />
              </div>
              {locationTypeOpen && (
                <ul className="dropdown-menu">
                  {["Remote", "Chennai", "Hyderabad", "Freelance"].map(
                    (type) => (
                      <li
                        key={type}
                        onClick={() => {
                          setLocationType(type);
                          setlocationTypeOpen(false);
                        }}
                      >
                        {type}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          </div>
          {/* JOB TYPE */}
          <div className="filter-item">
            <div className="verticalline"></div>
            <img className="jobtypeicon" src={assets.jobType} alt="Job Type" />
            <div className="custom-dropdown">
              <div
                className="dropdown-toggle"
                onClick={() => setJobTypeOpen((prev) => !prev)}
              >
                <span className="jobfont">{jobType}</span>
                <img
                  className="dropdown-icon"
                  src={assets.down}
                  alt="Down Arrow"
                />
              </div>
              {jobTypeOpen && (
                <ul className="dropdown-menu">
                  {["Full-Time", "Part-Time", "Contract", "Internship"].map(
                    (type) => (
                      <li
                        key={type}
                        onClick={() => {
                          setJobType(type);
                          setJobTypeOpen(false);
                        }}
                      >
                        {type}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          </div>
          {/* SALARY */}
          <div className="salarySlider">
            <div>
              <div className="salary-labelText">Salary Per Month </div>
            </div>
            <div className="salary-label">
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
            </div>
          </div>
          <div className="filter-item salary-slider">
            <div className="verticallineSalary"></div>
            <div className="salary-labelAmount">
              ₹{salary[0] / 1000}k - ₹{salary[1] / 1000}k
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
