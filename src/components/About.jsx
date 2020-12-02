import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <section id="page-top">
          <div className="container-fluid mb-5">
            <div className="row  d-flex p-3 justify-content-lg-start justify-content-center">
              <h1>
                Sean
                <span className="p-1" id="lastName">
                  Harrell
                </span>
              </h1>
            </div>
            <div className="row  p-3 d-flex justify-content-lg-start justify-content-center">
              <div className="subheading mb-5 " id="contact-about">
                <span role="img" aria-label="telephone">
                  📱
                </span>
                (619) 917-2304
                <a href="mailto:name@email.com" id="email">
                  <span role="img" aria-label="mailbox">
                    📫
                  </span>{" "}
                  seanvharrell@gmail.com
                </a>
              </div>
            </div>

            <div
              className="quote-container justify-content-center "
              style={{
                maxWidth: "1000px",
                height: "100px",
                textAlign: "center",
                margin: "0 auto",
              }}
            >
              <span className="left" style={{ display: "inline-block" }}>
                Inspired by imagination.
              </span>
              <span
                className="right"
                style={{
                  display: "inline-block",
                }}
              >
                Driven by results.
              </span>
            </div>
            <div className="about-container">
              <p className="mb-5" style={{ padding: "20px" }}>
                Hello, my name is Sean Harrell and I'm a San Diego-based Jr.
                Software Engineer who is not afraid to handle problems head on.
                While my path to web development is filled with plenty of twists
                and turns, my experiences have shaped me into what I believe is
                an asset within a work setting. <br />
                <br /> My previous administrative experience has allowed me to
                exercise a strong sense of organization, problem solving,
                communication, and time-management. I was entrusted with
                semi-sensitive responsibilities for San Diego's Community
                College District, working closely with the Vice Chancellor, and
                I was noted for quickly learning the ins and outs of the
                Development Services systems for the City of San Diego. <br />
                <br />
                While I enjoy collaborative team-settings where creativity can
                be exchanged, I am dependable as a single player as well. As a
                newly bootcamp graduate, I am excited to dive into what lays
                ahead, learning all that I can along the way!{" "}
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="social-icons">
                <a href="http://www.linkedin.com/in/seanharrell">
                  <i className="fab fa-linkedin-in" id="icon"></i>
                </a>
                <a href="http://www.github.com/seanphenomenon">
                  <i className="fab fa-github" id="icon"></i>
                </a>
                <a
                  href="https://drive.google.com/file/d/1AYz1pHDh08iStEO5sNJb0mgU2sMHIJA6/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-file-csv" id="icon"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <hr /> */}
      </div>
    );
  }
}
