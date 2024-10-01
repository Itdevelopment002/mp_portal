import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import axios from "axios";

const AddBoothNo = () => {
  const [booths, setBooths] = useState([]);
  const [formData, setFormData] = useState({ id: null, booth_no: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const fetchBooths = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/booths");
      setBooths(response.data);
    } catch (error) {
      console.error("Error fetching booths:", error);
    }
  };

  console.log(booths);

  useEffect(() => {
    fetchBooths();
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
          `http://localhost:5000/api/booths/${formData.id}`,
          formData
        );
      } else {
        await axios.post("http://localhost:5000/api/booths", formData);
      }
      resetForm();
      fetchBooths();
      setShowEditModal(false); 
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (booth) => {
    setFormData(booth); 
    setIsEditing(true);
    setShowEditModal(true); 
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/booths/${deleteId}`);
      fetchBooths();
      setShowDeleteModal(false); 
    } catch (error) {
      console.error("Error deleting booth:", error);
    }
  };

  const resetForm = () => {
    setFormData({ id: null, booth_no: "" });
    setIsEditing(false);
  };

  return (
    <>
      <div className="main-content app-content">
        <div className="container-fluid">
          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
            <div>
              <nav>
                <ol className="breadcrumb mb-1">
                  <li className="breadcrumb-item">
                    <Link to="/dashboard">Master</Link>
                  </li>
                  <HiOutlineArrowNarrowRight className="mx-2 align-self-center" />
                  <li className="breadcrumb-item active" aria-current="page">
                    Add Booth No.
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Form and Table */}
          <div className="row">
            <div className="col-xl-12">
              <div className="card custom-card">
                <div className="card-body">
                  {/* Form */}
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3">
                      <div className="col-xl-4 col-md-4">
                        <label className="form-label">Booth No.</label>
                        <input
                          type="text"
                          className="form-control"
                          name="booth_no"
                          value={formData.booth_no}
                          onChange={handleChange}
                          placeholder="Enter Booth No."
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

                {/* Booth List Table */}
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table text-nowrap table-bordered border-primary">
                      <thead className="table-warning">
                        <tr>
                          <th>Sr. No.</th>
                          <th>Booth No.</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {booths.length > 0 ? (
                          booths.map((booth, index) => (
                            <tr key={booth.id} className="table-light">
                              <td>{index + 1}</td>
                              <td>{booth.booth_no}</td>
                              <td>
                                <div className="btn-list">
                                  <button
                                    className="btn btn-sm btn-icon btn-success-gradient"
                                    onClick={() => handleEdit(booth)}
                                  >
                                    <i className="ri-pencil-line"></i>
                                  </button>

                                  <button
                                    className="btn btn-sm btn-icon btn-danger-gradient"
                                    onClick={() => {
                                      setDeleteId(booth.id);
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
                              No Booth No. found
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
                <h6 className="modal-title">Edit Booth No.</h6>
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
                    <label className="form-label">Booth No.</label>
                    <input
                      type="text"
                      className="form-control"
                      name="booth_no"
                      value={formData.booth_no}
                      onChange={handleChange}
                      placeholder="Enter Booth No."
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

      {/* Delete Modal */}
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

export default AddBoothNo;
