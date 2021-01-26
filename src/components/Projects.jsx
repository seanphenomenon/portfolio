import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Projects() {
  return (
    <div>
      <section className=' align-items-center mb-5' id='projects'>
        <h2
          className='mb-5 mt-3  text-lg-left text-sm-center '
          id='project-title'
        >
          Projects
        </h2>
        <div className='container-fluid'>
          <div className='row justify-content-center '>
            {/* ---- Movie Finder App  ---- */}
            <Fade>
              <div className='col-lg col-md container_photo'>
                <div className='popup-overlay text-center'>
                  <span>
                    <a
                      href='https://react200-movie-finder.herokuapp.com/#/'
                      id='project-links'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fas fa-eye' id='overlay-icon'></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href='https://github.com/seanphenomenon/react200-movie-finder'
                      id='project-links'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fas fa-laptop-code' id='overlay-icon'></i>
                    </a>
                  </span>
                </div>
                <article className='card-title text-left'>
                  <h2>Movie Finder App</h2>
                  <h4>
                    A simple movie finder application built with Javascript,
                    React, Redux, and the OMDb API
                  </h4>
                </article>
                <img
                  src='https://imgur.com/jG3J7AA.jpg'
                  alt='movie screenshot'
                  class='card-screenshot'
                />
              </div>

              {/* ---- Mortgage Calculator ----- */}
              <div className=' col-lg col-md  container_photo'>
                <div className='popup-overlay text-center'>
                  <span>
                    <a
                      href='https://react-100-mortgage-calculator.herokuapp.com'
                      id='project-links'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fas fa-eye' id='overlay-icon'></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href='https://github.com/seanphenomenon/React-100-Mortgage-Calculator'
                      id='project-links'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fas fa-laptop-code' id='overlay-icon'></i>
                    </a>
                  </span>
                </div>
                <article className='card-title text-left'>
                  <h2>Mortgage App</h2>
                  <h4>
                    A simple monthly mortage calculator app built with
                    Javascript, React & Bootstrap.
                  </h4>
                </article>
                <img
                  src='https://imgur.com/6peFBS7.jpg'
                  alt='mortgage screenshot'
                  class='card-screenshot'
                />
              </div>
            </Fade>
          </div>

          <div className='row justify-content-center '>
            {/* ---- Joke Generator ----- */}
            <Fade>
              <div className='col-lg col-md  container_photo'>
                <div className='popup-overlay text-center'>
                  <span>
                    <a
                      href='https://hackathon-jokes.herokuapp.com/'
                      id='project-links'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fas fa-eye' id='overlay-icon'></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href='https://github.com/seanphenomenon/hackathon-starter'
                      id='project-links'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fas fa-laptop-code' id='overlay-icon'></i>
                    </a>
                  </span>
                </div>
                <article className='card-title text-left'>
                  <h2>Joke Generator App</h2>
                  <h4>
                    A simple joke generator built with Javascript, React,
                    Bootstrap, and RapidJoke & Giphy API's
                  </h4>
                </article>
                <img
                  src='https://imgur.com/xTwF1oG.jpg'
                  alt='joke screenshot'
                  class='card-screenshot'
                />
              </div>

              {/* --- Interior Landing Page --- */}

              <div className='col-lg col-md  container_photo'>
                <div className='popup-overlay text-center'>
                  <span>
                    <a
                      href='https://interior-consultant-homepage.netlify.app/'
                      id='project-links'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fas fa-eye' id='overlay-icon'></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href='https://github.com/seanphenomenon/react200-movie-finder'
                      id='project-links'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fas fa-laptop-code' id='overlay-icon'></i>
                    </a>
                  </span>
                </div>
                <article className='card-title text-left'>
                  <h2>Interior Page</h2>
                  <h4>
                    A simple responsive landing design built with pure HTML,
                    CSS, and Javascript.
                  </h4>
                </article>
                <img
                  src='http://imgur.com/SiPySFl.jpg'
                  alt='interior screenshot'
                  class='card-screenshot'
                />
              </div>
            </Fade>
          </div>

          <div
            className='row justify-content-center'
            style={{ marginTop: '5em' }}
          >
            <Fade top>
              <p className=' subheading d-flex ' id='more-projects'>
                For more projects, please visit my
                <a
                  href='http://www.github.com/seanphenomenon'
                  target='_blank'
                  rel='noopener noreferrer'
                  id='github-projects'
                >
                  Github
                </a>
                .
              </p>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
}
