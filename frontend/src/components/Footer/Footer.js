import React from 'react';
import { Link } from 'react-router-dom';
// import './Footer.css'; // Import the CSS for additional styling if needed

const Footer = () => {
    return (
        <footer className="landing-main-footer py-3 text-light">
            <div className="container">
                <div className="row text-center text-lg-start">
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start mb-0 mb-lg-0">
                        <p className="mb-0">
                            Copyright © <span id="year">2024</span> All Rights Reserved, E-grievance Management System.
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-end">
                        <p className="mb-0">
                            Designed &amp; Developed <span className="fa fa-heart text-danger"></span> by
                            <Link 
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://infoigy.com/"
                                className="text-white ms-1"
                            >
                                Infoigy.
                            </Link> 
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
