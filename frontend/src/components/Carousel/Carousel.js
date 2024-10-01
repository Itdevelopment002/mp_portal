import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import slider from "../../assets/images/landing/slider.jpg";
import slider1 from "../../assets/images/landing/slider1.jpg";
import slider02 from "../../assets/images/landing/slider02.png";
import slider01 from "../../assets/images/landing/slider01.png";


// import './Carousel.css'; // Import the CSS for the Carousel

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slider} className="d-block w-100" alt="slider1" />
                </div>
                <div className="carousel-item">
                    <img src={slider1} className="d-block w-100" alt="slider2" />
                </div>
                <div className="carousel-item">
                    <img src={slider02} className="d-block w-100" alt="slider3" />
                </div>
                <div className="carousel-item">
                    <img src={slider01} className="d-block w-100" alt="slider4" />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
                style={{ backgroundColor: 'transparent', border: 'none' }}
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
                style={{ backgroundColor: 'transparent', border: 'none' }}
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>


        </div>
    );
};

export default Carousel;

