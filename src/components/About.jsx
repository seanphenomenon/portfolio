import React from 'react';
import Fade from 'react-reveal/Fade';

export default function About() {
  return (
    <div>
      <section id='page-top'>
        <div className='container-fluid mb-5'>
          <div className='row  d-flex p-3 justify-content-lg-start justify-content-center'>
            <Fade top>
              <h1>
                Sean
                <span className='p-1' id='lastName'>
                  Harrell
                </span>
              </h1>
            </Fade>
          </div>
          <div className='row  p-3 d-flex justify-content-lg-start justify-content-center'>
            <Fade top>
              <div className='subheading mb-5 ' id='contact-about'>
                <span role='img' aria-label='telephone' id='contact-icon'>
                  <i className='fas fa-mobile-alt'></i>
                </span>
                (619) 917-2304
                <a href='mailto:name@email.com' id='email'>
                  <span role='img' aria-label='mailbox' id='contact-icon'>
                    <i className='far fa-envelope'></i>
                  </span>
                  seanvharrell@gmail.com
                </a>
              </div>
            </Fade>
          </div>

          <div className='quote__container justify-content-center'>
            <span className='quote__left'>Inspired by imagination.</span>
            <span className='quote__right'>Driven by results.</span>
          </div>
          <div className='about-container'>
            <Fade>
              <p className='mb-4'>
                Hello, my name is Sean Harrell and I'm a San Diego-based web
                developer who is not afraid to handle problems head on. While my
                path to web development is filled with plenty of twists and
                turns, my experiences have shaped me into what I believe is an
                asset within a work setting.
              </p>
            </Fade>
            <Fade>
              <p className='mb-4'>
                My previous administrative experience has allowed me to exercise
                a strong sense of organization, problem solving, communication,
                and time-management. I was entrusted with semi-sensitive
                responsibilities for San Diego's Community College District,
                working closely with the Vice Chancellor, and I was noted for
                quickly learning the ins and outs of the Development Services
                systems for the City of San Diego. <br />
              </p>
            </Fade>
            <Fade>
              <p className='mb-5'>
                While I enjoy collaborative team-settings where creativity can
                be exchanged, I am dependable as a single player as well. As a
                newly bootcamp graduate, I am excited to dive into what lays
                ahead, learning all that I can along the way!
              </p>
            </Fade>
          </div>
          <div className='row justify-content-center'>
            <Fade top>
              <div className='social'>
                <a href='http://www.linkedin.com/in/seanharrell'>
                  <i className='fab fa-linkedin-in' id='social__icon'></i>
                </a>
                <a href='http://www.github.com/seanphenomenon'>
                  <i className='fab fa-github' id='social__icon'></i>
                </a>
                <a
                  href='https://drive.google.com/file/d/1X-LBz4uG26M2IRiNVoNToDHMrFref0h6/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fas fa-file-csv' id='social__icon'></i>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
}
