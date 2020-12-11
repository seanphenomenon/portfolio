import React from "react";
import Fade from "react-reveal/Fade";

export default function Education() {
  return (
    <div>
      <section className="p-5" id="education">
        <div className="w-100">
          <h2 className=" education-header p-2 mb-5 mt-3 text-lg-left text-sm-center">
            Education
          </h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-start mb-5">
            <div className="p-2">
              <h4>San Diego Code School</h4>
              <Fade>
                {/* hidden date below on md and up*/}
                <div className=" date text-md-right d-md-none " id="date">
                  <span>November 2019 - May 2020</span>
                </div>
                <div className="mb-3 subheading">
                  Full-Stack Web Development Program
                </div>
                <p id="education-info" style={{ maxWidth: "800px" }}>
                  Learned full-stack JavaScript development best practices with
                  HTML/CSS, React.js, Express, Node.js, MongoDB, and MySQL.
                  <br />
                  <br />
                  Participated in group projects where mob programming and/or
                  pair programming were utilized.
                  <br />
                  <br />
                  Implemented Git for version control in both group and
                  individual projects.
                  <br />
                  <br />
                  Followed Agile Scrum Development principles and practices.
                  <br />
                </p>
              </Fade>
            </div>
            <Fade>
              <div
                className=" date text-md-right ml-3 d-none d-md-block"
                id="date"
              >
                <span>November 2019 - May 2020</span>
              </div>
            </Fade>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-start mb-5">
            <div className="p-2">
              <h4>San Diego State University</h4>
              <Fade>
                {/* hidden date below on md and up*/}
                <div className=" date text-md-right d-md-none " id="date">
                  <span>September 2012 - December 2015</span>
                </div>
                <div className="mb-3 subheading">
                  Bachelor's Degree - Business (Marketing){" "}
                </div>
                <p id="education-info" style={{ maxWidth: "800px" }}>
                  Obtained skills and knowledge centered on general business
                  practices and logistics, and integrated marketing
                  communications.
                  <br />
                  <br />
                  Developed an understanding that adheres to user experience,
                  promotions, and digital marketing for products and services.
                  <br />
                  <br />
                  Proficient in Google Analytics and Hootsuite. <br />
                </p>
              </Fade>
            </div>
            <Fade>
              <div
                className=" date text-md-right ml-4 d-none d-md-block"
                id="date"
              >
                <span>September 2012 - December 2015</span>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
}
