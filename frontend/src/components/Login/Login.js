
import React, { useState } from "react";
import Swal from 'sweetalert2'; 

import {
  RiUserLine,
  RiEyeOffLine,
  RiEyeLine,
  RiLockLine,
} from "react-icons/ri"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Praniti from '../../assets/images/login/congress-logo.png';
import Photo2 from '../../assets/images/login/praniti-photo2.png'

const Login = () => {
  const navigate = useNavigate();

  const [userData, setData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); 
  const [isRememberChecked, setIsRememberChecked] = useState(false); 
  const [inputStyles, setInputStyles] = useState({
    username: "form-control",
    password: "form-control",
  });

  const handleChange = (e) => {
    setData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });

    if (e.target.name === "username") {
      setInputStyles({
        ...inputStyles,
        username: e.target.value ? "form-control input-filled" : "form-control",
      });
    } else if (e.target.name === "password") {
      setInputStyles({
        ...inputStyles,
        password: e.target.value ? "form-control input-filled" : "form-control",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!userData.username) newErrors.username = "Username is required";
    if (!userData.password) newErrors.password = "Password is required";
    if (!isRememberChecked)
      newErrors.remember = "Please check 'Remember password'";
    return newErrors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/login", userData);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Login Successfully',
        timer: 1500, 
        timerProgressBar: true, 
        showConfirmButton: false, 
    }).then(() => {
        console.log('Alert closed');
    });
      navigate("/dashboard");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberChange = (e) => {
    setIsRememberChecked(e.target.checked);
    setErrors({ ...errors, remember: "" });
  };

  return (
    <div className="landing-body">
      <div className="row authentication authentication-cover-main mx-0">
        <div className="col-xxl-6 col-xl-7">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-xxl-7 col-xl-9 col-lg-6 col-md-6 col-sm-8 col-12">
              <div className="card custom-card my-auto border">
                <div className="card-body p-5">
                  <div className="d-flex mb-3 justify-content-between gap-2 flex-wrap flex-lg-nowrap">
                    <button className="btn btn-lg btn-light-ghost d-flex align-items-center justify-content-center flex-fill">
                      <img width="150" src={Praniti} alt="congress-logo" />
                    </button>
                  </div>
                  <h5 className="text-dark mb-1 text-center fw-medium mb-3">
                    Welcome to Citizen Grievance Management System
                  </h5>
                  <p className="h4 mb-2 text-center text-danger">LOGIN</p>
                  <p className="mb-4 text-dark op-9 fw-normal text-center">
                    Please enter your details to Sign In
                  </p>
                  <div className="row gy-3">
                    <div className="col-xl-12 mb-2">
                      <div className="mb-3">
                        <label className="form-label fs-14 text-dark">
                          Username
                        </label>
                        <div className="input-group">
                          <div className="input-group-text">
                            <RiUserLine />
                          </div>
                          <input
                            type="text"
                            className={inputStyles.username}
                            name="username"
                            value={userData.username}
                            onChange={handleChange}
                          />
                        </div>
                        {errors.username && (
                          <div className="text-danger">{errors.username}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label fs-14 text-dark">
                          Password
                        </label>
                        <div className="input-group">
                          <div className="input-group-text">
                            <RiLockLine />
                          </div>
                          <input
                            type={showPassword ? "text" : "password"}
                            className={inputStyles.password}
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                          />
                          <a
                            className="show-password-button text-muted"
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? (
                              <RiEyeLine className="align-middle" />
                            ) : (
                              <RiEyeOffLine className="align-middle" />
                            )}
                          </a>
                        </div>
                        {errors.password && (
                          <div className="text-danger">{errors.password}</div>
                        )}
                      </div>

                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberCheck"
                          checked={isRememberChecked}
                          onChange={handleRememberChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberCheck"
                        >
                          Remember password ?
                        </label>
                        {errors.remember && (
                          <div className="text-danger">{errors.remember}</div>
                        )}
                      </div>

                      <div className="d-grid gap-2 col-6 mx-auto">
                        <button
                          className="btn btn-primary01-gradient text-center"
                          style={{
                            background:
                              "linear-gradient(155deg, #FF4E4E 0%, #FFF279 100%)",
                            color: "#fff",
                            border: "0",
                          }}
                          onClick={onSubmit}
                        >
                          LOGIN
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xxl-6 col-xl-5 col-lg-12 d-xl-block d-none px-0 text-center">
          <div className="authentication-cover overflow-hidden">
            <div className="aunthentication-cover-content d-flex align-items-center justify-content-center">
              <div className="login-rightside">
                <img className="mb-4" src={Photo2} alt="praniti-photo" />
                <h3 className="text-fixed-white mb-3 fw-medium">
                  Praniti Shinde
                </h3>
                <h5 className="text-fixed-white mb-1">
                  Hon. Member of Parliament, Solapur Lok Sabha Constituency
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
