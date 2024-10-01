/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img1 from '../../assets/images/gallery/img1.jpg';
import img2 from '../../assets/images/gallery/img2.jpg';
import img3 from '../../assets/images/gallery/img3.jpg';
import img4 from '../../assets/images/gallery/img4.jpg';
import img5 from '../../assets/images/gallery/img5.jpg';
import img6 from '../../assets/images/gallery/img6.jpg';
import img7 from '../../assets/images/gallery/img7.jpg';
import img8 from '../../assets/images/gallery/img8.jpg';
import './Gallary.css';

const Gallery = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextImage = (event) => {
        event.stopPropagation(); // Prevent click from propagating to the document
        setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    };

    const prevImage = (event) => {
        event.stopPropagation(); // Prevent click from propagating to the document
        setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <div className="main-content pt-3">
            <div className="container">
                <div className="text-center">
                    <p className="fs-15 fw-medium text-success mb-1">
                        <span className="landing-section-heading text-danger">Awesome Picture</span>
                    </p>
                    <h4 className="fw-semibold mt-3 mb-3">Gallery</h4>
                </div>
                <div className="row">
                    {images.map((img, index) => (
                        <div key={index} className="col-lg-3 col-md-3 col-sm-6 col-6">
                            <a href="#!" onClick={() => openModal(index)} className="glightbox card">
                                <img src={img} alt={`image ${index + 1}`} className="img-fluid" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Modal with Carousel */}
                {isModalOpen && (
                    <div className="modal-overlay" role="dialog">
                        <button type="button" className="close-modal" onClick={closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-dialog modal-dialog-centered" role="document" ref={modalRef}>
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    {images.map((imgSrc, index) => (
                                        <div
                                            key={index}
                                            className={`carousel-item ${index === selectedImageIndex ? 'active' : ''}`}
                                        >
                                            <img src={imgSrc} className="d-block w-100" alt={`image ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Carousel controls */}
                        <button
                            className="carousel-control-prev"
                            onMouseDown={prevImage} // Use onMouseDown instead of onClick
                            aria-label="Previous"
                        >
                            <FaChevronLeft size={18} />
                        </button>
                        <button
                            className="carousel-control-next"
                            onMouseDown={nextImage} // Use onMouseDown instead of onClick
                            aria-label="Next"
                        >
                            <FaChevronRight size={18} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
