import React from "react";

export default class Education extends React.Component {
  render() {
    return (
      <div>
        <section className="p-5 align-items-center" id="education">
          <div className="w-100">
            <h2 className="p-2 mb-3">Education</h2>
            <div className="resume-item d-flex flex-column flex-md-row justify-content-center mb-5">
              <div className="p-2">
                <h4 className="mb-0">San Diego Code School</h4>

                {/* hidden date below on md and up*/}
                <div className="date text-md-right ml-3 d-md-none" id="date">
                  <span className="date">November 2019 - May 2020</span>
                </div>
                <div className="mb-3 subheading">
                  {" "}
                  Completed Full-Stack Web Development Program
                </div>
                <p className="justify-content-left" id="education-info">
                  • Learned full-stack JavaScript development best practices
                  with React.js, HTML/CSS, Node.js, MongoDB, and MySQL
                  <br />
                  • Participated in group projects where mob programming and/or
                  pair programming were utilized
                  <br />
                  • Implemented Git for version control in both group and
                  individual projects
                  <br />
                  • Followed Agile Development principles and practices <br />
                </p>
              </div>
              <div
                className="date text-md-right ml-3 d-none d-md-block"
                id="date"
              >
                <span className="date">November 2019 - May 2020</span>
              </div>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-center mb-5">
            <div className="p-2">
              <h4>San Diego State University</h4>

              {/* hidden date below on md and up*/}
              <div className=" date text-md-right ml-3 d-md-none " id="date">
                <span>September 2012 - December 2015</span>
              </div>
              <div className="mb-3 subheading">
                Bachelor of Science - Business (Marketing){" "}
              </div>
              <p id="education-info">
                • Obtained skills and knowledge centered on general business
                practices and logistics, and integrated marketing communications
                <br />
                • Developed an understanding that adheres to user experience,
                promotions, and digital marketing for products and services
                <br />
                • Proficient in Google Analytics and Hootsuite <br />
              </p>
            </div>
            <div
              className=" date text-md-right ml-3 d-none d-md-block"
              id="date"
            >
              <span>September 2012 - December 2015</span>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    );
  }
}
