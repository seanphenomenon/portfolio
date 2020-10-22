import React from "react";

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <section className=" p-5 align-items-center mb-5" id="projects">
          <div className="w-100">
            <h2 className="mb-5 mt-4">Projects</h2>
            <div className="row">
              {/* Movie Finder App */}
              <div className="col-lg-6  col-md-12 col-sm-12 col-xs-12">
                <h4
                  className="d-flex justify-content-center"
                  id="project-title"
                >
                  Movie Finder App{" "}
                </h4>
                <p className="justify-content-center" id="project-info">
                  • A simple movie finder application built with Javascript,
                  React, Redux, and the OMDb API
                </p>

                <div
                  id="carouselExampleControls-movie"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner mx-auto">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src="https://i.imgur.com/sRulkms.jpg"
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://imgur.com/0sVFhMq.jpg"
                        alt="Second slide"
                      />
                    </div>

                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://imgur.com/QEWNhOk.jpg"
                        alt="Third slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls-movie"
                    role="button"
                    data-slide="prev"
                    style={{ width: "10%", height: "105%" }}
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls-movie"
                    role="button"
                    data-slide="next"
                    style={{ width: "10%", height: "105%" }}
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                  <div
                    className="d-flex justify-content-center"
                    id="project-links"
                  >
                    <a
                      href="https://react200-movie-finder.herokuapp.com/#/"
                      id="live-page"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                    ||{" "}
                    <a
                      href="https://github.com/seanphenomenon/react200-movie-finder"
                      id="github-page"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Mortgage Calculator */}
              <div className="col-lg-6 col-md-12 col-xs-12 ">
                <h4
                  className="d-flex justify-content-center"
                  id="project-title"
                >
                  {" "}
                  Mortgage Calculator App{" "}
                </h4>
                <p id="project-info" className="justify-content-center">
                  • A simple Monthly Mortage Calculator app Built with
                  Javascript, React.js & Bootstrap{" "}
                </p>

                <div
                  id="carouselExampleControls-mortgage"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner mx-auto">
                    <div className="carousel-item active">
                      <img
                        className=" image d-block w-100"
                        src="https://imgur.com/6peFBS7.jpg"
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://imgur.com/Vs0C5E4.jpg"
                        alt="Second slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls-mortgage"
                    role="button"
                    data-slide="prev"
                    style={{ width: "15%", height: "100%" }}
                  >
                    <span
                      className="carousel-control-prev-icon"
                      id="mortgage-arrow"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls-mortgage"
                    role="button"
                    data-slide="next"
                    style={{ width: "15%", height: "100%" }}
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                  <div
                    className="d-flex justify-content-center"
                    id="project-links"
                  >
                    <a
                      href="https://react-100-mortgage-calculator.herokuapp.com"
                      id="live-page"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                    ||
                    <a
                      href="https://github.com/seanphenomenon/React-100-Mortgage-Calculator"
                      id="github-page"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Joke Generator */}
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                <h4
                  className="d-flex justify-content-center"
                  id="project-title"
                >
                  {" "}
                  Joke Generator{" "}
                </h4>
                <p id="project-info">
                  • A simple joke generator accompanied with funny GIF's! Built
                  with Javascript, React, Bootstrap, the RapidJokeAPI, and the
                  GiphyAPI
                </p>

                <div
                  id="carouselExampleControls-Jokes"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner mx-auto">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src="https://imgur.com/xjx9knb.jpg"
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://imgur.com/xTwF1oG.jpg"
                        alt="Second slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls-Jokes"
                    role="button"
                    data-slide="prev"
                    style={{ width: "15%", height: "100%" }}
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls-Jokes"
                    role="button"
                    data-slide="next"
                    style={{ width: "15%", height: "100%" }}
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                  <div
                    className="d-flex justify-content-center"
                    id="project-links"
                  >
                    <a
                      href="https://hackathon-jokes.herokuapp.com/"
                      id="live-page"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                    ||
                    <a
                      href="https://github.com/seanphenomenon/hackathon-starter"
                      id="github-page"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p
              className=" subheading d-flex justify-content-center"
              id="more-projects"
            >
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
        </section>
        <hr />
      </div>
    );
  }
}
