import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
// import "../AddNewEntry/addNewEntry.css"

const AddEntryPage = () => {
  const [entries, setEntries] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({
    inwardNo: "",
    entryDate: "",
    subject: "",
    description: "",
  });
  const [Error, setError] = useState({
    inwardNo: "",
    entryDate: "",
    subject: "",
    description: "",
  })

  //validation

  const validateForm = () => {
    const newError = { inwardNo: "", entryDate: "", subject: "", description: "" };
    let isValid = true;

 // Validate 'inwardNo' (must be non-empty and alphanumeric, can include '/' and '-')
if (!formData.inwardNo.trim()) {
  newError.inwardNo = "*Inward number is required";
  isValid = false;
} 
// Adjust the regex to allow letters, numbers, '/' and '-' while ensuring both letters and numbers are present
else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d/-]+$/.test(formData.inwardNo)) {
  newError.inwardNo = "*Inward number must contain both letters and numbers, and can include '/' and '-'";
  isValid = false;
} 



   
    if (!formData.entryDate) {
      newError.entryDate = "*Entry Date is required";
      isValid = false;
    } else {
      const dateValue = new Date(formData.entryDate);
      if (isNaN(dateValue.getTime())) {
        newError.entryDate = "*Please enter a valid date";
        isValid = false;
      }
    }

    
    if (!formData.subject.trim()) {
      newError.subject = "*Subject name is required";
      isValid = false;
    } else if (!/^[A-Za-z\s]*$/.test(formData.subject)) {
      newError.subject = "*Only alphabets are allowed in Subject";
      isValid = false;
    }

    
    if (!formData.description.trim()) {
      newError.description = "*Description name is required";
      isValid = false;
    } else if (!/^[A-Za-z\s]*$/.test(formData.description)) {
      newError.description = "*Only alphabets are allowed in Description";
      isValid = false;
    }

    
    setError(newError);
    return isValid;
  };

//handle focus 
  const handleFocus = (field) => {
    setError((prevError) => ({ ...prevError, [field]: "" }));
  }


  useEffect(() => {
    fetchEntries();
    fetchSubjects();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/entries");
      setEntries(response.data);
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };

  const fetchSubjects = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/subjects");
      setSubjects(response.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  //handle change 
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newError = {}; 
   
    if (name === "description" || name === "subject") {
      if (/^[A-Za-z\s]*$/.test(value) || value === "") {
        setFormData({ ...formData, [name]: value });
        newError[name] = "";  // Clear any error if input is valid
      } else {
        newError[name] = `*Only alphabets allowed for ${name}`;
      }
    }


    if (name === "inwardNo") {

      setFormData({ ...formData, [name]: value });
    
      // Validation for inwardNo: must contain both letters and numbers, no other special characters
      if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(value)) {
        newError[name] = "";  // Clear the error if input is valid
      } else {
        newError[name] = "*Inward number must contain both letters and numbers, and no special characters";
      }
    
    }
    

    if (name === "entryDate") {
      const dateValue = new Date(value);
      if (!isNaN(dateValue.getTime())) {
        setFormData({ ...formData, [name]: value });
      }
    }


    setError((prevError) => ({ ...prevError, ...newError }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/add-entry", formData);
      fetchEntries();
      setFormData({
        inwardNo: "",
        entryDate: "",
        subject: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding entry:", error);
    }
  };
  return (
    <>
      <div className="main-content app-content">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
            <div>
              <nav>
                <ol className="breadcrumb d-flex align-items-center mb-1">
                  <li className="breadcrumb-item">
                    <Link to="/dashboard">Home</Link>
                  </li>
                  <HiOutlineArrowNarrowRight className="mx-2 align-self-center" />
                  <li className="breadcrumb-item active" aria-current="page">
                    Add New Entry
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="card custom-card">
                <div className="card-header justify-content-between">
                  <div className="card-title fs-5">Add New Entry</div>
                  <div className="prism-toggle">
                    <button
                      className="btn btn-success-gradient btn-wave waves-effect waves-light"
                      type="file"
                      id="formFile"
                    >
                      Import Excel
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3">
                      <div className="col-xl-4 col-md-4">
                        <label className="form-label">
                          Inward No. <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input-rounded"
                          name="inwardNo"
                          value={formData.inwardNo}
                          onChange={handleChange}
                          placeholder="IN/0001/23-8-24"

                          onFocus={() => handleFocus('inwardNo')}
                        />
                        {Error.inwardNo && <p style={{ color: "red", fontSize: "11px" }}>{Error.inwardNo}</p>}

                      </div>

                      <div className="col-xl-4 col-md-4">
                        <div className="form-group">
                          <label htmlFor="datePicker" className="form-label">
                            Entry Date <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text text-muted">
                              <AiOutlineCalendar size={15} />
                            </div>

                            <Flatpickr
                              id="datePicker"
                              className="flatpickr-input form-control"
                              placeholder="Human friendly dates"
                              value={formData.entryDate}
                              onFocus={() => handleFocus('entryDate')}
                              options={{
                                dateFormat: "F j, Y",
                                monthSelectorType: "dropdown",
                                prevArrow:
                                  '<svg><path d="M10 5L5 10L10 15"></path></svg>',
                                nextArrow:
                                  '<svg><path d="M10 5L5 10L10 15"></path></svg>',
                              }}
                              onChange={(date) =>
                                handleChange({
                                  target: { name: "entryDate", value: date[0] },
                                })
                              }
                            />

                          </div>
                          {Error.entryDate && <p style={{ color: "red", fontSize: "11px" }}>{Error.entryDate}</p>}

                        </div>
                      </div>

                      <div className="col-xl-4 col-md-4">
                        <label htmlFor="subject-select" className="form-label">
                          Subject <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-select"
                          id="subject-select"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => handleFocus('subject')}

                        >
                          <option selected>Select Subject</option>
                          {subjects.map((subject, index) => (
                            <option key={index} value={subject.subject_name}>
                              {subject.subject_name}
                            </option>
                          ))}
                        </select>
                        {Error.subject && <p style={{ color: "red", fontSize: "11px" }}>{Error.subject}</p>}

                      </div>
                      <div className="col-xl-8 col-md-6">
                        <label htmlFor="description" className="form-label">
                          Description
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          placeholder="Enter Description"
                          onFocus={() => handleFocus('description')}
                        />
                        {Error.description && <p style={{ color: "red", fontSize: "11px" }}>{Error.description}</p>}

                      </div>
                    </div>
                    <div className="mt-3">
                      <button
                        to="#submit"
                        className="btn btn-purple-gradient btn-wave waves-effect waves-light"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger-gradient btn-wave waves-effect waves-light mx-1"
                        onClick={() =>
                          setFormData({
                            inwardNo: "",
                            entryDate: "",
                            subject: "",
                            description: "",
                          })
                        }
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="card custom-card overflow-hidden">
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table text-nowrap table-bordered border-primary">
                      <thead className="table-warning">
                        <tr>
                          <th>Sr. No.</th>
                          <th>Inward No.</th>
                          <th>Entry Date</th>
                          <th>Subject</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {entries.map((entry, index) => (
                          <tr key={entry.id} className="table-light">
                            <td>
                              {(index + 1).toString().padStart(2, '0')}
                            </td>
                            <td>{entry.inward_no}</td>

                            <td>
                              {new Date(entry.entry_date).toLocaleDateString('en-GB', {
                                day: '2-digit',    // Ensures two-digit day (e.g., 01)
                                month: '2-digit',  // Ensures two-digit month (e.g., 09)
                                year: 'numeric'    // Displays the full year (e.g., 2024)
                              }).replace(/\//g, '-')}
                            </td>

                            <td>{entry.subject}</td>
                            <td>{entry.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEntryPage;
