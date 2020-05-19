import React from 'react';

export default class Projects extends React.Component {
    render() {
        return (
            <div>
                <section className='p-5 align-items-center mb-5' id="projects">
                    <div className='w-100'>
                <h2>Projects</h2>
                <h5>Movie Finder App </h5>
                <p>A simple movie finder application built with Javascript, React, Redux, and the OMDb API.</p>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner mx-auto">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src='https://i.imgur.com/sRulkms.jpg' alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://imgur.com/0sVFhMq.jpg" alt="Second slide" />            
                            </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://imgur.com/QEWNhOk.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                </div>
                </section>
                <hr />
            </div>

        );
    }
}