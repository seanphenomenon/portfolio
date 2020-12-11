import React from "react";
import Fade from "react-reveal/Fade";

export default function Projects() {
  return (
    <div>
      <section className=" align-items-center mb-5" id="projects">
        <h2
          className="mb-5 mt-3 p-5 text-lg-left text-sm-center "
          id="project-title"
        >
          Projects
        </h2>
        <div className="container-fluid">
          <div className="row justify-content-center ">
            {/* ---- Movie Finder App  ---- */}
            <Fade>
              <div className="col-md  container_photo">
                <div className="popup-overlay text-center">
                  <span>
                    <a
                      href="https://react200-movie-finder.herokuapp.com/#/"
                      id="project-links"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-eye" id="eye-icon"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://github.com/seanphenomenon/react200-movie-finder"
                      id="project-links"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-laptop-code" id="eye-icon"></i>
                    </a>
                  </span>
                </div>
                <article className="card-title text-left">
                  <h2 style={{ textAlign: "left" }}>Movie Finder App</h2>
                  <h4 style={{ maxWidth: "200px", maxHeight: "35px" }}>
                    A simple movie finder application built with Javascript,
                    React, Redux, and the OMDb API
                  </h4>
                </article>
                <img
                  src="https://i.imgur.com/sRulkms.jpg"
                  alt="movie"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              {/* ---- Mortgage Calculator ----- */}
              <div className=" col-md  container_photo">
                <div className="popup-overlay text-center">
                  <span>
                    <a
                      href="https://react-100-mortgage-calculator.herokuapp.com"
                      id="project-links"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fas fa-eye"
                        id="eye-icon"
                        style={{ fontSize: "1em", color: "white" }}
                      ></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://github.com/seanphenomenon/React-100-Mortgage-Calculator"
                      id="project-links"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fas fa-laptop-code"
                        id="eye-icon"
                        style={{ fontSize: "1em", color: "white" }}
                      ></i>
                    </a>
                  </span>
                </div>
                <article className="card-title text-left">
                  <h2 style={{ textAlign: "left" }}>Mortgage App</h2>
                  <h4 style={{ maxWidth: "200px", maxHeight: "35px" }}>
                    A simple monthly mortage calculator app built with
                    Javascript, React & Bootstrap.
                  </h4>
                </article>
                <img
                  src="https://imgur.com/6peFBS7.jpg"
                  alt="movie"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              {/* ---- Joke Generator ----- */}

              <div className="col-md  container_photo">
                <div className="popup-overlay text-center">
                  <span>
                    <a
                      href="https://hackathon-jokes.herokuapp.com/"
                      id="project-links"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fas fa-eye"
                        id="eye-icon"
                        style={{ fontSize: "1em", color: "white" }}
                      ></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://github.com/seanphenomenon/hackathon-starter"
                      id="project-links"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fas fa-laptop-code"
                        id="code-icon"
                        style={{ fontSize: "1em", color: "white" }}
                      ></i>
                    </a>
                  </span>
                </div>
                <article className="card-title text-left">
                  <h2 style={{ textAlign: "left" }}>Joke Generator App</h2>
                  <h4 style={{ maxWidth: "200px", maxHeight: "35px" }}>
                    A simple joke generator built with Javascript, React,
                    Bootstrap, and RapidJoke & Giphy API's
                  </h4>
                </article>
                <img
                  src="https://imgur.com/xTwF1oG.jpg"
                  alt="movie"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </Fade>
          </div>

          <div
            className="row justify-content-center"
            style={{ marginTop: "5em" }}
          >
            <Fade top>
              <p className=" subheading d-flex " id="more-projects">
                For more projects, please visit my{" "}
                <a
                  href="http://www.github.com/seanphenomenon"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="github-projects"
                >
                  {" "}
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
