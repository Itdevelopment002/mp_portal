import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const AddComplaintSender = () => {
  const [complaints, setComplaints] = useState([]);
  const [formData, setFormData] = useState({ id: null, sender: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); 
  const [deleteId, setDeleteId] = useState(null);

  const fetchComplaints = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/complaint_senders"
      );
      setComplaints(response.data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(
          `http://localhost:5000/api/complaint_senders/${formData.id}`,
          formData
        );
      } else {
        await axios.post(
          "http://localhost:5000/api/complaint_senders",
          formData
        );
      }
      resetForm();
      fetchComplaints();
      setShowEditModal(false); 
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (complaint) => {
    setFormData(complaint); 
    setIsEditing(true);
    setShowEditModal(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/complaint_senders/${deleteId}`
      );
      fetchComplaints();
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting complaint:", error);
    }
  };

  const resetForm = () => {
    setFormData({ id: null, sender: "" });
    setIsEditing(false);
  };

  return (
    <>
      <div class="main-content app-content">
        <div class="container-fluid">
          <div class="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
            <div>
              <nav>
                <ol class="breadcrumb mb-1">
                  <li class="breadcrumb-item">
                    <Link to="/dashboard">Master</Link>
                  </li>
                  <HiOutlineArrowNarrowRight className="mx-2 align-self-center" />
                  <li class="breadcrumb-item active" aria-current="page">
                    Add Complaint Sender
                  </li>
                </ol>
              </nav>
              {/* <!-- <h1 class="page-title fw-medium fs-18 mb-0">Add New Entry</h1> --> */}
            </div>
          </div>

          <div class="row">
            <div class="col-xl-12">
              <div class="card custom-card">
                <div class="card-body">
                  <form onSubmit={handleSubmit}>
                    <div class="row gy-3">
                      <div class="col-xl-4 col-md-4">
                        <label class="form-label">Complaint Sender</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Complaint Sender"
                          name="sender"
                          value={formData.sender}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mt-5 col-xl-4">
                        <button className="btn btn-purple-gradient">
                          Submit
                        </button>
                        <button
                          className="btn btn-danger-gradient mx-1"
                          type="button"
                          onClick={resetForm}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table text-nowrap table-bordered border-primary">
                      <thead class="table-warning">
                        <tr>
                          <th>Sr. No.</th>
                          <th>Complaint Sender</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {complaints.length > 0 ? (
                            complaints.map((complaint, index) => (
                            <tr key={complaint.id} className="table-light">
                              <td>{index + 1}</td>
                              <td>{complaint.sender}</td>
                              <td>
                                <div className="btn-list">
                                  <button
                                    className="btn btn-sm btn-icon btn-success-gradient"
                                    onClick={() => handleEdit(complaint)}
                                  >
                                    <i className="ri-pencil-line"></i>
                                  </button>
                                  <button
                                    className="btn btn-sm btn-icon btn-danger-gradient"
                                    onClick={() => {
                                      setDeleteId(complaint.id);
                                      setShowDeleteModal(true);
                                    }}
                                  >
                                    <i className="ri-delete-bin-line"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4" className="text-center">
                              No Complaint Sender found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {(showEditModal || showDeleteModal) && (
        <div className="modal-backdrop fade show"></div>
      )}

      {showEditModal && (
        <div className="modal show d-block">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h6 className="modal-title">
                Edit Complaint Sender
              </h6>
              <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowEditModal(false);
                    resetForm();
                  }}
                ></button>
              </div>
            <div className="modal-body">
                <div className="row gy-3">
                  <div className="col-xl-8 col-md-8">
                    <label className="form-label">
                      Complaint Sender
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="sender"
                      value={formData.sender}
                      onChange={handleChange}
                      placeholder="Enter Sender Name"
                    />
                  </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                  type="button"
                  className="btn btn-purple-gradient"
                  onClick={handleSubmit}
                >
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn btn-danger-gradient"
                  onClick={() => {
                    setShowEditModal(false);
                    resetForm();
                  }}
                >
                  Close
                </button>
              </div>
          </div>
        </div>
      </div>
        )}

      {showDeleteModal && (
        <div className="modal show d-block">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center">
              <div className="modal-body">
                <h6>Are you sure you want to delete this item?</h6>
              </div>
              <div className="modal-footer d-block">
                <button
                  type="button"
                  className="btn btn-success-gradient"
                  onClick={handleDelete}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-danger-gradient"
                  onClick={() => setShowDeleteModal(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddComplaintSender;
