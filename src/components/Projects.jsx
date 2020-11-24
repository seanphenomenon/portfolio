import React from "react";

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <section className=" align-items-center mb-5" id="projects">
          <h2 className="mb-5 mt-4 p-5">Projects</h2>
          <div className="project-container  text-center">
            <div className="row project-row  justify-content-center ">
              {/* ---- Movie Finder App  ---- */}
              <div className="col-lg-4  col-md-12 col-sm-12 col-xs-12 offset-lg-2  container_foto">
                <div className="ver_mas text-center">
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
                </div>
                <article className="text-left">
                  <h2>Movie Finder App</h2>
                  <h4>
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
              <div className="col-lg-4 col-md-12 col-sm-12 container_foto">
                <div className="ver_mas text-center">
                  <span>
                    <a
                      href="https://github.com/seanphenomenon/React-100-Mortgage-Calculator"
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
                </div>
                <article className="text-left">
                  <h2>Mortgage Calculator App</h2>
                  <h4>
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
              <div
                className="col-lg-4 col-md-12 col-sm-12 container_foto"
                // style={{ maxWidth: "400px", marginLeft: 5 }}
              >
                <div className="ver_mas text-center">
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
                </div>
                <article className="text-left">
                  <h2>Joke Generator App</h2>
                  <h4>
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
            </div>
            <div
              className="row justify-content-center"
              style={{ marginTop: "5em" }}
            >
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
            </div>
          </div>
        </section>
        <hr />
      </div>
    );
  }
}
