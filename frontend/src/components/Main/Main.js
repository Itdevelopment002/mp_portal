import React from 'react';
// import Footer from './Footer';
import Carousel from '../Carousel/Carousel';
import Gallery from '../Gallary/Gallery';
import praniti from "../../assets/images/landing/praniti-shinde.png";
// import Heading from './Heading';

const Main = () => {
    return (
        <div>

            <Carousel />
            <section className="section-bg" id="expectations">
                <div className="container">
                    <div className="row gx-5 mx-0">
                        <div className="col-xl-3">
                            <div className="home-proving-image">
                                <img src={praniti} alt="about-img" className="img-fluid pt-3 about-image d-none d-xl-block" />
                            </div>
                            <div className="proving-pattern-1"></div>
                        </div>
                        <div className="col-xl-9 my-auto">
                            <div className="heading-section text-start mb-4">
                                <p className="fs-15 fw-medium text-start text-success mb-1">
                                    <span className="landing-section-heading text-danger">Introduction</span>
                                </p>
                                <h4 className="mt-3 fw-semibold mb-2">Praniti Sushilkumar Shinde</h4>
                                <h6 className="mb-4 fw-bold">Hon. Member of Parliament, Solapur Lok Sabha Constituency.</h6>
                                <div className="heading-description fs-14">
                                    <p><b>Praniti Sushilkumar Shinde</b> is an esteemed Indian politician representing Maharashtra. Currently serving as a Member of Parliament for the Solapur Lok Sabha constituency, she is affiliated with the Indian National Congress Party. With a distinguished political career.</p>
                                    <p><b>Praniti Shinde</b> has also served three terms as a Member of the Maharashtra Legislative Assembly, representing the Solapur City Central constituency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Gallery />

        </div>
    );
};

export default Main;
