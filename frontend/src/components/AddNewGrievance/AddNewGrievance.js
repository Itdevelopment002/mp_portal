import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCalendar } from "react-icons/ai";
import axios from "axios";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";

const AddNewGrievance = () => {
  const [subjects, setSubjects] = useState([]);
  const [booths, setBooths] = useState([]);
  const [assistants, setAssistants] = useState([]);
  const [senders, setSenders] = useState([]);
  const [status, setStatus] = useState([]);
  const [talukas, setTalukas] = useState([]);
  const [groups, setGroups] = useState([]);
  const [formData, setFormData] = useState({
    inwardNo: "",
    subject: "",
    fullName: "",
    mobileNo: "",
    boothNo: "",
    handledBy: "",
    complaintSentTo: "",
    date: "",
    applicationStatus: "",
    district: "",
    taluka: "",
    village: "",
    city: "",
    pincode: "",
    whatsappGroup: "",
    remark: "",
  });

  const fetchSubjects = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/subjects"
      );
      setSubjects(response.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const fetchBooths = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/booths"
      );
      setBooths(response.data);
    } catch (error) {
      console.error("Error fetching booths:", error);
    }
  };

  const fetchAssistants = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/personal_assistants"
      );
      setAssistants(response.data);
    } catch (error) {
      console.error("Error fetching assistants:", error);
    }
  };

  const fetchSenders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/complaint_senders"
      );
      setSenders(response.data);
    } catch (error) {
      console.error("Error fetching senders:", error);
    }
  };

  const fetchStatus = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/application_status"
      );
      setStatus(response.data);
    } catch (error) {
      console.error("Error fetching status:", error);
    }
  };

  const fetchTalukas = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/talukas");
      setTalukas(response.data);
    } catch (error) {
      console.error("Error fetching talukas:", error);
    }
  };

  const fetchGroups = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/whatsapp_groups"
      );
      setGroups(response.data);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  useEffect(() => {
    fetchSubjects();
    fetchBooths();
    fetchAssistants();
    fetchSenders();
    fetchStatus();
    fetchTalukas();
    fetchGroups();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/grievances", formData);
      resetForm();
    } catch (error) {
      console.error("Error adding grievances:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      inwardNo: "",
      subject: "",
      fullName: "",
      mobileNo: "",
      boothNo: "",
      handledBy: "",
      complaintSentTo: "",
      date: "",
      applicationStatus: "",
      district: "",
      taluka: "",
      village: "",
      city: "",
      pincode: "",
      whatsappGroup: "",
      remark: "",
    });
  };

  return (
    <>
      {/* <!-- Start::app-content --> */}
      <div class="main-content app-content">
        <div class="container-fluid">
          {/* <!-- Page Header --> */}
          <div class="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
            <div>
              <nav>
                <ol class="breadcrumb mb-1">
                  <li class="breadcrumb-item">
                    <Link to="/dashboard">Home</Link>
                  </li>
                  <HiOutlineArrowNarrowRight className="mx-2 align-self-center" />
                  <li class="breadcrumb-item active" aria-current="page">
                    Add New Grievance
                  </li>
                </ol>
              </nav>
              {/* <!-- <h1 class="page-title fw-medium fs-18 mb-0">Add New Grievance</h1> --> */}
            </div>
          </div>
          {/* <!-- Page Header Close -->

           <!-- Start::row-1 --> */}
          <div class="row">
            <div class="col-xl-12">
              <div class="card custom-card">
                <div class="card-header justify-content-between">
                  <div class="card-title fs-5">New Application Data Entry</div>
                  <div class="prism-toggle">
                    <Link
                      class="btn btn-success-gradient btn-wave waves-effect waves-light"
                      type="file"
                      id="formFile"
                    >
                      Import Excel
                    </Link>
                  </div>
                </div>
                <div class="card-body">
                  <form onSubmit={handleSubmit}>
                    <div class="row gy-3">
                      <div class="col-xl-6 col-md-6">
                        {" "}
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
                          required
                        />
                      </div>
                      <div className="col-xl-6 col-md-6">
                        <label
                          htmlFor="subject-select"
                          className="form-label"
                        >
                          Subject <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-select"
                          id="subject-select"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option selected>Select Subject</option>
                          {subjects.map((subject, index) => (
                            <option key={index} value={subject.subject_name}>
                              {subject.subject_name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div class="col-xl-6 col-md-6">
                        <label for="input-rounded" class="form-label">
                          Full Name <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="input-rounded"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter Full Name"
                        />
                      </div>
                      <div class="col-xl-6 col-md-6">
                        <label for="input-rounded" class="form-label">
                          Mobile No. <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="input-rounded"
                          name="mobileNo"
                          value={formData.mobileNo}
                          onChange={handleChange}
                          placeholder="Enter Mobile No."
                        />
                      </div>
                      <div className="col-xl-6 col-md-6">
                        <label
                          htmlFor="booth-select"
                          className="form-label"
                        >
                          Booth No. <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-select"
                          id="booth-select"
                          name="boothNo"
                          value={formData.boothNo}
                          onChange={handleChange}
                          required
                        >
                          <option selected>Select Booth No.</option>
                          {booths.map((booth, index) => (
                            <option key={index} value={booth.booth_no}>
                              {booth.booth_no}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-xl-6 col-md-6">
                        <label
                          htmlFor="assistant-select"
                          className="form-label"
                        >
                          Handled by <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-select"
                          id="assistant-select"
                          name="handledBy"
                          value={formData.handledBy}
                          onChange={handleChange}
                          required
                        >
                          <option selected>Select Handler</option>
                          {assistants.map((assistant, index) => (
                            <option key={index} value={assistant.name}>
                              {assistant.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div class="col-xl-4 col-md-6">
                        <label htmlFor="complaintSentTo" className="form-label">
                          Complaint Send to <span class="text-danger">*</span>
                        </label>
                        <select
                          className="form-select"
                          id="sender-select"
                          name="complaintSentTo"
                          value={formData.complaintSentTo}
                          onChange={handleChange}
                          required
                        >
                          <option selected>Select Sender</option>
                          {senders.map((sender, index) => (
                            <option key={index} value={sender.sender}>
                              {sender.sender}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-xl-4 col-md-4">
                        <div className="form-group">
                          <label htmlFor="datePicker" className="form-label">
                            Date <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text text-muted">
                              <AiOutlineCalendar size={15} />
                            </div>

                            <Flatpickr
                              id="datePicker"
                              className="flatpickr-input form-control"
                              placeholder="Human friendly dates"
                              value={formData.date} 
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
                                  target: { name: "date", value: date[0] },
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-4 col-md-6">
                        <label htmlFor="applicationStatus" class="form-label">
                          Application Status <span class="text-danger">*</span>
                        </label>
                        <select
                          className="form-select"
                          id="status-select"
                          name="applicationStatus"
                          value={formData.applicationStatus}
                          onChange={handleChange}
                          required
                        >
                          <option selected>Select Status</option>
                          {status.map((status, index) => (
                            <option key={index} value={status.status}>
                              {status.status}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div class="col-xl-4 col-md-6">
                        <label for="input-rounded" class="form-label">
                          Disctrict <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="input-rounded"
                          name="district"
                          value={formData.district}
                          onChange={handleChange}
                          placeholder="Enter Disctrict"
                        />
                      </div>
                      <div class="col-xl-4 col-md-6">
                        <label htmlFor="taluka" class="form-label">
                          Taluka <span class="text-danger">*</span>
                        </label>
                        <select
                          className="form-select"
                          id="taluka-select"
                          name="taluka"
                          value={formData.taluka}
                          onChange={handleChange}
                          required
                        >
                          <option selected>Select Taluka</option>
                          {talukas.map((taluka, index) => (
                            <option key={index} value={taluka.taluka_name}>
                              {taluka.taluka_name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div class="col-xl-4 col-md-6">
                        <label for="input-rounded" class="form-label">
                          Village
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="input-rounded"
                          name="village"
                          value={formData.village}
                          onChange={handleChange}
                          placeholder="Enter Village"
                        />
                      </div>
                      <div class="col-xl-2 col-md-6">
                        <label for="input-rounded" class="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="input-rounded"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Enter city"
                        />
                      </div>
                      <div class="col-xl-2 col-md-6">
                        <label for="input-rounded" class="form-label">
                          Pincode
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="input-rounded"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          placeholder="Enter Pincode"
                        />
                      </div>
                      <div class="col-xl-2 col-md-6">
                        <label htmlFor="whatsappGroup" class="form-label">
                          Whatsapp Group
                        </label>
                        <select
                          className="form-select"
                          id="taluka-select"
                          name="whatsappGroup"
                          value={formData.whatsappGroup}
                          onChange={handleChange}
                          required
                        >
                          <option selected>Select Whatsapp Group</option>
                          {groups.map((group, index) => (
                            <option key={index} value={group.group_name}>
                              {group.group_name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div class="col-xl-6">
                        <label for="input-rounded" class="form-label">
                          Remark
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="input-rounded"
                          name="remark"
                          value={formData.remark}
                          onChange={handleChange}
                          placeholder="Enter Remark"
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <button to="#submit" className="btn btn-purple-gradient btn-wave waves-effect waves-light">Submit</button>
                      <button to="#cancel" className="btn btn-danger-gradient btn-wave waves-effect waves-light mx-1" onClick={resetForm}>Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewGrievance;
