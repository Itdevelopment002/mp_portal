import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import axios from 'axios';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import Swal from 'sweetalert2'; 

const ScanGallary = () => {
    const [images, setImages] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage] = useState(6); 
    const fileInputRef = useRef(null);

    useEffect(() => {
        fetchImages();
    }, []);

    useEffect(() => {
        if (images.length > 0) {
            const lightbox = GLightbox({
                selector: '.glightbox',
                loop: true, 
            });
        }
    }, [images]);

    const fetchImages = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/images'); 
            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await axios.post('http://localhost:5000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: response.data.message,
                timer: 1000, 
                timerProgressBar: true, 
                showConfirmButton: false, 
            }).then(() => {
          
                console.log('Alert closed');
            });
            
            fetchImages();
            setSelectedFile(null); 
            fileInputRef.current.value = ''; 
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
    const totalPages = Math.ceil(images.length / imagesPerPage);

    return (
        <>
            <div className="main-content app-content">
                <div className="container-fluid">
                    <div className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
                        <div>
                            <nav>
                                <ol className="breadcrumb mb-1">
                                    <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                                    <HiOutlineArrowNarrowRight className="mx-2 align-self-center" />
                                    <li className="breadcrumb-item active" aria-current="page">Scan Application</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="btn-list">
                            <Link to="/add-new-entry" className="btn btn-success-gradient btn-wave waves-effect waves-light">
                                <i className="ri-share-forward-line me-1"></i> Add New Entry
                            </Link>
                        </div>
                    </div>

                    <div className="card custom-card">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Upload Scan Application</div>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <input 
                                                className="form-control" 
                                                type="file" 
                                                onChange={handleFileChange} 
                                                ref={fileInputRef}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-purple-gradient btn-wave waves-effect waves-light">Submit</button>
                                        <button type="button" className="btn btn-danger-gradient btn-wave waves-effect waves-light mx-1">Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {currentImages.length > 0 ? (
                            currentImages.map((image) => (
                                <div key={image.id} className="col-lg-2 col-md-3 col-sm-6 col-6 text-center">
                                    <a
                                        href={`http://localhost:5000${image.file_path}`} 
                                        className="glightbox card" 
                                        data-gallery="gallery1" 
                                        data-title={`Image ${image.id}`} 
                                    >
                                        <img 
                                            src={`http://localhost:5000${image.file_path}`} 
                                            alt={image.filename} 
                                            className="img-fluid img-thumbnail"
                                        />
                                        <h6>{image.formattedId}</h6>
                                    </a>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <h5>No images available</h5>
                            </div>
                        )}
                    </div>

                    <div className="card-body">
                        <nav aria-label="Page navigation">
                            <ul className="pagination mb-0">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button 
                                        className="page-link" 
                                        onClick={() => setCurrentPage(currentPage - 1)} 
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                </li>
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                        <button 
                                            className="page-link" 
                                            onClick={() => setCurrentPage(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button 
                                        className="page-link" 
                                        onClick={() => setCurrentPage(currentPage + 1)} 
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ScanGallary;
