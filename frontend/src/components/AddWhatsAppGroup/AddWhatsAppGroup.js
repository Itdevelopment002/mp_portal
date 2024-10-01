import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const AddWhatsAppGroup = () => {
  const [groups, setGroups] = useState([]);
  const [formData, setFormData] = useState({ id: null, group_name: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); // To control the edit modal
  const [deleteId, setDeleteId] = useState(null);

  // Fetch Personal Assistants
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
    fetchGroups();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission for adding or updating
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(
          `http://localhost:5000/api/whatsapp_groups/${formData.id}`,
          formData
        );
      } else {
        await axios.post("http://localhost:5000/api/whatsapp_groups", formData);
      }
      resetForm();
      fetchGroups();
      setShowEditModal(false); 
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Handle edit action and show modal
  const handleEdit = (group) => {
    setFormData(group); 
    setIsEditing(true);
    setShowEditModal(true); 
  };

  // Handle delete confirmation
  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/whatsapp_groups/${deleteId}`
      );
      fetchGroups();
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting group:", error);
    }
  };

  // Reset form and states
  const resetForm = () => {
    setFormData({ id: null, group_name: "" });
    setIsEditing(false);
  };
  return (
    <>
      <div class="main-content app-content">
        <div class="container-fluid">
          {/* <!-- Page Header --> */}
          <div class="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
            <div>
              <nav>
                <ol class="breadcrumb mb-1">
                  <li class="breadcrumb-item">
                    <Link to="/dashboard">Master</Link>
                  </li>
                  <HiOutlineArrowNarrowRight className="mx-2 align-self-center" />
                  <li class="breadcrumb-item active" aria-current="page">
                    Add Whatsapp Group
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {/* <!-- Page Header Close -->

        <!-- Start::row-1 --> */}
          <div class="row">
            <div class="col-xl-12">
              <div class="card custom-card">
                <div class="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3">
                      <div className="col-xl-4 col-md-4">
                        <label className="form-label">Whatsapp Group</label>
                        <input
                          type="text"
                          className="form-control"
                          name="group_name"
                          value={formData.group_name}
                          onChange={handleChange}
                          placeholder="Enter Whatsapp Group"
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

                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table text-nowrap table-bordered border-primary">
                      <thead className="table-warning">
                        <tr>
                          <th>Sr. No.</th>
                          <th>Whatsapp Group</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {groups.length > 0 ? (
                          groups.map((group, index) => (
                            <tr key={group.id} className="table-light">
                              <td>{index + 1}</td>
                              <td>{group.group_name}</td>
                              <td>
                                <div className="btn-list">
                                  <button
                                    className="btn btn-sm btn-icon btn-success-gradient"
                                    onClick={() => handleEdit(group)}
                                  >
                                    <i className="ri-pencil-line"></i>
                                  </button>
                                  <button
                                    className="btn btn-sm btn-icon btn-danger-gradient"
                                    onClick={() => {
                                      setDeleteId(group.id);
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
                              No Whatsapp Group found
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

      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal show d-block">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h6 className="modal-title">Edit Whatsapp Group</h6>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowEditModal(false);
                    resetForm();
                  }}
                ></button>
              </div>
              <div class="modal-body">
                <div class="row gy-3">
                  <div class="col-xl-8 col-md-8">
                    <label class="form-label">Whatsapp Group</label>
                    <input
                      type="text"
                      className="form-control"
                      name="group_name"
                      value={formData.group_name}
                      onChange={handleChange}
                      placeholder="Enter Whatsapp Group"
                    />{" "}
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

export default AddWhatsAppGroup;
