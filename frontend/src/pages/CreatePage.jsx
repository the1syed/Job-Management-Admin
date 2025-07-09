import React, { useState, useEffect } from "react";

// --- Modal Styles ---
const modalStyles = `
*{
font-family:"Satoshi-Variable",
font-size: 20px;
}



.createjob-modal-overlay {

  position: fixed;
  inset: 0;
  // background: rgba(251, 251, 255, 0.6);
  // backdrop-filter: blur(6px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.createjob-modal {
width: 848px;
height: 779px;
top: 58px;
    left: -3px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.13);
  padding: 32px 28px 28px 28px;
  max-width: 850px;
  width: 95vw;
  font-family: 'Inter', sans-serif;
  z-index: 1001;
  position: relative;
  padding: 34px;
  margin: auto;
}

.createjob-modal h2 {
  /* Create Job Opening */

position: absolute;
width: 227px;
height: 32px;
left: calc(50% - 227px/2 + 0.5px);
top: 30px;

font-family: 'Satoshi-Variable';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;

color: #222222;


}

.createjob-row {
  display: flex;
  gap: 24px;
  margin-bottom: 18px;
}

.createjob-field {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.createjob-field label {
font-weight: 600;
  margin-bottom: 7px;
  color: #222;
  transition: font-weight 0.2s ease;
}

.createjob-field:focus-within label {
  font-weight: 600;
}

.createjob-input, .createjob-select, .createjob-textarea {
  border: 1px solid #BCBCBC !important;
  height: 58px;
  border-radius: 9px;
  padding: 12px;
  font-size: 1.05rem;
  outline: none;
  margin-bottom: 2px;
  // background: #fafbfc;
  transition: border-color 0.2s;
  font-weight: normal;
}

.createjob-input:focus, .createjob-select:focus, .createjob-textarea:focus {
  font-weight: bold;
}

::placeholder {
  font-weight: normal;
}

.createjob-textarea{
font-weight: normal;
min-height: 150px;
}

.createjob-salary-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.createjob-salary-row .createjob-input {
  flex: 1;
}

.createjob-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 26px;
}

.createjob-draft, .createjob-publish {
  /* Frame 48102958 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 60px;
gap: 10px;

width: 207px;
height: 59px;
left: 601px;
top: 683px;

background: #00AAFF;
border-radius: 10px;

}

.createjob-publish-text{
/* Publish */
text-wrap: nowrap;
width: 67px;
height: 27px;

font-family: 'Satoshi-Variable';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
/* identical to box height */

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;
}


.createjob-draft {
  /* Frame 48102959 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 60px;
gap: 10px;

width: 232px;
height: 59px;
left: 40px;
top: 683px;

background: #FFFFFF;
border: 1.5px solid #222222;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;

}

.createjob-draft-text{
/* Save Draft */
text-wrap: nowrap;
width: 94px;
height: 27px;

font-family: 'Satoshi-Variable';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
/* identical to box height */

color: #222222;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;
}

.createjob-draft:hover {
  background: #f4f4f4;
}

.createjob-publish {
  background: #00aaff;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;
  
}

.createjob-publish:hover {
  background: #008fcc;
}

@media (max-width: 900px) {
  .createjob-modal {
    padding: 18px 8px;
    max-width: 99vw;
  }
  .createjob-row {
    flex-direction: column;
    gap: 0;
  }
}

.maxSalary{
/* Frame 48102952 */

box-sizing: border-box;

width: 183px;
height: 58px;

border: 1px solid #BCBCBC;
border-radius: 10px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
padding-left: 12px;

}

.createjob-select {
  font-weight: normal;
}

.createjob-select.bold {
  font-weight: bold;
}

input[type="date"].createjob-input {
  font-weight: normal;
}

.minSalary{
/* Frame 48102951 */

box-sizing: border-box;

width: 183px;
height: 58px;

background: #FFFFFF;
border: 1px solid #BCBCBC;
border-radius: 10px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
padding-left: 12px;
}

.test{
position: relative;
top: 90px;
left: 4px;
}

.createjob-select option[value=""] {
  color: #aaa;
  font-style: italic;
}


`;

const jobTypes = ["FullTime", "PartTime", "Internship", "Contract"];
const locations = ["Chennai", "Bangalore", "Hyderabad", "Delhi", "Mumbai"];

export default function CreateJobs() {
  // Inject styles only once
  useEffect(() => {
    if (!document.getElementById("createjob-modal-style")) {
      const style = document.createElement("style");
      style.id = "createjob-modal-style";
      style.innerHTML = modalStyles;
      document.head.appendChild(style);
    }
  }, []);

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "",
    minSalary: "",
    maxSalary: "",
    deadline: "",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSaveDraft() {
    alert("Draft saved!");
    // Save draft logic here
  }

  function handlePublish(e) {
    e.preventDefault();
    fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to create job");
        return res.json();
      })
      .then((data) => {
        alert("Job published!");
        setForm({
          title: "",
          company: "",
          location: locations[0],
          jobType: jobTypes[0],
          minSalary: "",
          maxSalary: "",
          deadline: "",
          description: "",
        });
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  }

  return (
    <div className="createjob-modal-overlay">
      <form className="createjob-modal" onSubmit={handlePublish}>
        <h2>Create Job Opening</h2>
        <div className="test">
          <div className="createjob-row">
            <div className="createjob-field">
              <label>Job Title</label>
              <input
                className="createjob-input"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter Job title"
                required
              />
            </div>
            <div className="createjob-field">
              <label>Company Name</label>
              <input
                className="createjob-input"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Amazon, Microsoft, Swiggy"
                required
              />
            </div>
          </div>
          <div className="createjob-row">
            <div className="createjob-field">
              <label>Location</label>
              <select
                className={`createjob-select ${form.location ? "bold" : ""}`}
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Choose Preferred Location"
              >
                <option value="" disabled hidden>
                  Choose Preferred Location
                </option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <div className="createjob-field">
              <label>Job Type</label>
              <select
                className={`createjob-select ${form.jobType ? "bold" : ""}`}
                name="jobType"
                value={form.jobType}
                onChange={handleChange}
                placeholder="Job Type"
              >
                <option value="" disabled hidden>
                  Choose Job Type
                </option>
                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="createjob-row">
            <div className="createjob-field">
              <label>Salary Range</label>
              <div className="createjob-salary-row">
                <input
                  type="number"
                  className="minSalary"
                  name="minSalary"
                  value={form.minSalary}
                  onChange={handleChange}
                  placeholder="₹ 0"
                  min={0}
                />
                <input
                  type="number"
                  className="maxSalary"
                  name="maxSalary"
                  value={form.maxSalary}
                  onChange={handleChange}
                  placeholder="₹ 12,00,000"
                  min={0}
                />
              </div>
            </div>
            <div className="createjob-field">
              <label>Application Deadline</label>
              <input
                type="date"
                className="createjob-input"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </div>
          <div className="createjob-field" style={{ marginBottom: 0 }}>
            <label>Job Description</label>
            <textarea
              className="createjob-textarea"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Please share a description to let the candidate know more about the job role"
              rows={6}
            />
          </div>
          <div className="createjob-actions">
            <button
              type="button"
              className="createjob-draft"
              onClick={handleSaveDraft}
            >
              <div className="createjob-draft-text">
                Save Draft <span style={{ fontSize: "1.2em" }}>&#9660;</span>
              </div>
            </button>
            <button type="submit" className="createjob-publish">
              <div className="createjob-publish-text">
                Publish &nbsp; <span style={{ fontSize: "1.2em" }}>&#187;</span>
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
