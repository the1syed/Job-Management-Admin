import React from "react";
import "./Navbar.css";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="menubar">
          <div className="innermenu">
            <Link to="/" className="logo-link" >
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
              <button className="createjobinner">Create Jobs</button>
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
            <span className="salaryText">Salary Per Month</span>
            <input type="range" min={50000} max={80000} />
            <span className="salary-label">₹50k - ₹80k</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
