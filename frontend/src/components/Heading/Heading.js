import React from "react";
import { Link } from "react-router-dom";
import favicon from "../../assets/images/header/favicon.png";
import emblemDark from "../../assets/images/landing/emblem-dark.png";
import swachhBharatLogo from "../../assets/images/header/Swachh_Bharat_Mission_Logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Heading.css'; 

const Header = () => {
  return (
    // <div className="container">
      <nav className="main-menu-container head nav nav-pills sub-open py-2">
        <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap">

          {/* Left Section: Logo and Text */}
          <div className="d-flex align-items-center flex-shrink-1 logo-left">
            <img src={favicon} alt="favicon-logo" className="me-3 logosize" />
            <div>
              <span className="fs-16 d-block mb-0 fw-bold">Citizen Grievance <br />Management System</span>
              <span className="text-muted fs-12">Government of Maharashtra</span>
            </div>
          </div>

          {/* Centered Emblem and Swachh Bharat Logos */}
          <div className="d-flex align-items-center  justify-content-center mx-auto logos-center">
            <img width="40" src={emblemDark} alt="emblem-logo" className="me-3" />
            <img width="120" src={swachhBharatLogo} alt="swachh-bharat-logo" />
          </div>

          {/* Right Section: Login Button */}
          <div className="d-flex align-items-center flex-shrink-1 logo-right">
            <Link to="/login" className="btn btn-primary gradient-btn">
              LOGIN
            </Link>
          </div>
        </div>
      </nav>
    // </div>
  );
};

export default Header;
