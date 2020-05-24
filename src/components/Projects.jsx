import React from 'react';

export default class Projects extends React.Component {
    
    render() {
        return (
            <div>
                <section className=' p-5 align-items-center mb-5' id="projects">
                    <div className='w-100'>
                        <h2 className='mb-5 mt-4'>Projects</h2>
                        <div className='row mb-3'>
                            {/* Movie Finder App */}
                            <div className='col-md-6'>
                                <h4 className='d-flex justify-content-center' id='project-title'>Movie Finder App </h4>
                                <p id='project-info'>• A simple movie finder application built with Javascript, React, Redux, and the OMDb API</p>
                                

                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval='false'>
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
                                    <div className='d-flex justify-content-center'>
                                    <a  href='https://react200-movie-finder.herokuapp.com/#/' id='live-page' target='_blank' rel="noopener noreferrer">View</a>
                                || <a href='https://github.com/seanphenomenon/react200-movie-finder' id='github-page' target='_blank' rel="noopener noreferrer">GitHub</a>
                                    </div>
                                </div>
                            </div>
                                
                                {/* Mortgage Calculator */}
                                <div className='col-md-6'>
                                <h4 className='d-flex justify-content-center' id='project-title'> Mortgage Calculator App </h4>
                                <p  id='project-info' className='justify-content-center'>• A simple Monthly Mortage Calculator app Built with Javascript, React.js & Bootstrap </p>
                                

                                <div id="carouselExampleControls-mortgage" className="carousel slide" data-ride="carousel" data-interval='false'>
                                    <div className="carousel-inner mx-auto">
                                        <div className="carousel-item active">
                                            <img className=" image d-block w-100" src='https://imgur.com/6peFBS7.jpg' alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="https://imgur.com/Vs0C5E4.jpg" alt="Second slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls-mortgage" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" id='mortgage-arrow' aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls-mortgage" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                    <div className='d-flex justify-content-center'>
                                    <a  href='https://react-100-mortgage-calculator.herokuapp.com' id='live-page' target='_blank'rel="noopener noreferrer">View</a>
                                ||<a  href='https://github.com/seanphenomenon/React-100-Mortgage-Calculator' id='github-page' target='_blank' rel="noopener noreferrer">GitHub</a>
                                    </div>
                                </div>
                            </div>
                            </div>

                            {/* VSTDA app */}
                            <div className='row justify-content-center'>
                            <div className='col-md-6'>
                                <h4 className='d-flex justify-content-center' id='project-title'> Simple To-Do App </h4>
                                <p id='project-info'>• Keep track of all your daily tasks with this simple to-do C.R.U.D app! Built with Javascript, React, & Bootstrap!</p>
                                

                                <div id="carouselExampleControls-Vstda" className="carousel slide" data-ride="carousel" data-interval='false'>
                                    <div className="carousel-inner mx-auto">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src='https://imgur.com/QZ1WKQZ.jpg' alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="https://imgur.com/B5oZjxU.jpg" alt="Second slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls-Vstda" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls-Vstda" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                    <div className='d-flex justify-content-center'>
                                     <a href='https://react-100-vstda.herokuapp.com/' id='live-page' target='_blank'rel="noopener noreferrer">View</a>
                                ||<a href='https://github.com/seanphenomenon/React-100-Vstda/tree/master' id='github-page' target='_blank'rel="noopener noreferrer">GitHub</a>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                            <p className=' subheading d-flex justify-content-center'>For other projects, please visit my <a href='http://www.github.com/seanphenomenon' target='_blank' rel="noopener noreferrer" id='github-projects'> Github</a>.</p>
                            
                        </div>
                </section>
                <hr />
            </div>

        );
    }
}