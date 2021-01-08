import React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

export default function Skills() {
  return (
    <div>
      <section className='p-5 align-items-center mb-5' id='skills'>
        <div className='w-100'>
          <h2 className='p-2 mb-5 mt-3 text-lg-left  text-sm-center'>Skills</h2>
          <div className=' d-flex flex-column flex-md-row justify-content-center'>
            <div className='p-2'>
              <Fade top>
                <div className='mb-3 subheading'>
                  Programming Languages & Tools
                </div>
              </Fade>
              <Flip top>
                <div className='container'>
                  <div className='dev-icons mb-5'>
                    <i className='fab fa-html5' id='skill-icon'></i>
                    <i className='fab fa-css3-alt' id='skill-icon'></i>
                    <i className='fab fa-js' id='skill-icon'></i>
                    <i className='fab fa-react' id='skill-icon'></i>
                    <i className='fab fa-node' id='skill-icon'></i>
                    <i className='fab fa-git' id='skill-icon'></i>
                    <i className='fab fa-npm' id='skill-icon'></i>
                    <i className='fab fa-slack' id='skill-icon'></i>
                    <i className='fab fa-wordpress-simple' id='skill-icon'></i>
                  </div>
                </div>
              </Flip>
              <div className='container'>
                <div className='row mb-2'>
                  <div className='col-md-6 mb-5 text-md-left' id='softSkills'>
                    <h4>Soft Skills</h4>
                    <hr />
                    <Fade bottom>
                      <p id='skill-list'>
                        <i className='fas fa-check' id='checkmark'></i>
                        Creative Thinker
                        <br />
                        <i className='fas fa-check' id='checkmark'></i>
                        Collaborative
                        <br />
                        <i className='fas fa-check' id='checkmark'></i>
                        Quick Learner
                        <br />
                        <i className='fas fa-check' id='checkmark'></i>
                        Diligent
                        <br />
                        <i className='fas fa-check' id='checkmark'></i>
                        Resourceful
                      </p>
                    </Fade>
                  </div>
                  <div className='col-md-6 text-md-left' id='toolSkills'>
                    <h4>Additional Tools</h4>
                    <hr />
                    <Fade bottom>
                      <p id='skill-list'>
                        <i className='fas fa-check' id='checkmark'></i>
                        MongoDB
                        <br />
                        <i className='fas fa-check' id='checkmark'></i>
                        MySQL
                        <br />
                        <i className='fas fa-check' id='checkmark'></i>
                        Material-UI
                        <br />
                        <i className='fas fa-check' id='checkmark'></i>
                        Scrum Methodology
                        <br />
                        <i className='fas fa-check' id='checkmark'></i>
                        CircleCI
                        <br />
                        <i className='fas fa-check' id='checkmark'></i>
                        Loopback
                        <br />
                        <i className='fas fa-check' id='checkmark'></i>
                        Jira
                        <br />
                        <i className='fas fa-check' id='checkmark'></i>
                        Google Analytics
                        <br />
                        <i className='fas fa-check' id='checkmark'></i>
                        Hootsuite
                        <br />
                      </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
