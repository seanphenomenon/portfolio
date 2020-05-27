import React from 'react';

export default class App extends React.Component {

    render() {
        return (
            <div className='container-fluid p-4 p-lg-5  max-auto'>
                <div className='w-100'>
                    <section className='p-3 align-items-center' id="page-top">
                        {/* <img src="https://media-exp1.licdn.com/dms/image/C5603AQFpKADShErEzw/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=Vtrx-qY-cFqjd-Lcv61bRjSTARfaXOu765xEvegpjXE" id='profile-photo' alt="profile picture" width="200" height="200" /> */}

                        <h1 className='mb-0 justify-content-center mt-2' id='firstName'>Sean
                              <span className="p-1" id='lastName'>Harrell</span>
                        </h1>
                        <div className="subheading mb-5" id='address'>1706 Picket Fence Drive · Chula Vista, CA 91915 · (619) 917-2304 ·
                        <a href="mailto:name@email.com" id='email'> SeanVHarrell@gmail.com</a>
                        </div>
                        <div>
                            <p className='mr-4 d-flex justify-content-center mb-5' id="quote">Inspired by imagination. Driven by results.</p>
                        </div>
                        <p className='mb-5' id='about-me'> Hello, my name is Sean Harrell and I'm a San Diego-based full-stack web developer who is not afraid to handle problems head on. While my path to web development is filled with plenty of twists and turns, my experiences have shaped me into what I believe is an asset within a work setting. <br />
                            <br /> My previous administrative experience has allowed me to exercise a strong sense of organization, problem solving, communication, and time-management.
                        I was entrusted with semi-sensitive resposibilities for San Diego's Community College District, working closely with the Vice Chancellor, and I was noted for quickly learning the ins and outs of the Development Services systems for the City of San Diego. <br /><br />
                            While I enjoy collaborative team-settings where creativity can be exchanged, I am dependable as a single player, too. As a newly bootcamp graduated, I am excited to dive into what lays ahead, learning all that I can along the way. </p>
                        <div className="social-icons mx-auto">
                            <a href="http://www.linkedin.com/in/seanharrell">
                                <i className="fab fa-linkedin-in" id="linked-in-icon"></i>
                            </a>
                            <a href="http://www.github.com/seanphenomenon">
                                <i className="fab fa-github" id='github-icon'></i>
                            </a>
                            <a href="https://drive.google.com/file/d/1kbvWPc2nmjaEsN9plHrPeTRyuak035bR/view?usp=sharing" target='_blank' rel="noopener noreferrer">
                                <i className="fas fa-file-csv" id='resume-icon'></i>                                
                                </a>
                        </div>
                    </section>
                </div>
                <hr />
            </div>

        );
    }
}