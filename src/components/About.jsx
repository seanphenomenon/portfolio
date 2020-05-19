import React from 'react';

export default class App extends React.Component {
    
    render() {
        return (
            <div className='container-fluid p-5 max-auto'>
                <div className='w-100'>
                    <section className='p-3 align-items-center' id="page-top">
                        <h1 className='mb-0' id='firstName'>Sean
                              <span className="p-2" id='lastName'>Harrell</span>
                        </h1>
                        <div className="subheading mb-5" id='address'>1706 Picket Fence Drive · Chula Vista, CA 91915 · (619) 917-2304 ·
                        <a href="mailto:name@email.com" id='email'>SeanVHarrell@gmail.com</a>
                        </div>
                        <p className='lead mb-5' id='about-me'> Hello, my name is Sean Harrell and I'm a San Diego-based full-stack web developer who is not afraid to handle problems head on. While my path to web development is filled with plenty of twists and turns, my experiences have shaped me into what I believe is an asset within a work setting. <br/><br/> My administrative experience has allowed me to exercise a strong sense of organization, problem solving, and communication. 
                        I was entrusted with semi-sensitive resposibilities for San Diego's College District, working closely with the Vice Chancellor, and I was noted for quickly learning the ins and outs of the Developemnt Services systems for the City of San Diego. <br/><br/>
                        While I enjoy collaborative team-settings where creativty can be exchanged, I am dependable as a single player, too. As a newly bootcamp graduated, I am excited to dive into what lays ahead, learning all that I can along the way. </p>
                        <div className="social-icons mx-auto">
                            <a href="http://www.linkedin.com/in/seanharrell">
                                <i className="fab fa-linkedin-in" id="linked-in"></i>
                            </a>
                            <a href="http://www.github.com/seanphenomenon">
                                <i className="fab fa-github" id='git-hub'></i>
                            </a>
                        </div>
                    </section>
                </div>
                <hr/>
            </div>

        );
    }
}