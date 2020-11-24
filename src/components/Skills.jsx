import React from "react";

export default class Skills extends React.Component {
  render() {
    return (
      <div>
        <section className="p-5 align-items-center" id="skills">
          <div className="w-100">
            <h2 className="p-2 mb-5 mt-3">Skills</h2>
            <div className=" d-flex flex-column flex-md-row justify-content-center">
              <div className="p-2">
                <div className="mb-3 subheading">
                  Programming Languages & Tools
                </div>
                <div className="container">
                  <div className="dev-icons mb-5">
                    <i className="fab fa-html5" id="skill-icon"></i>
                    <i className="fab fa-css3-alt" id="skill-icon"></i>
                    <i className="fab fa-js" id="skill-icon"></i>
                    <i className="fab fa-react" id="skill-icon"></i>
                    <i className="fab fa-node" id="skill-icon"></i>
                    <i className="fab fa-git" id="skill-icon"></i>
                    <i className="fab fa-npm" id="skill-icon"></i>
                    <i className="fab fa-slack" id="skill-icon"></i>
                  </div>
                </div>
                <div className="container">
                  <div className="row mb-2">
                    <div className="col-md-6 mb-5" id="softSkills">
                      <h4>Soft Skills</h4>
                      <p id="skill-list">
                        <i className="fas fa-check" id="checkmark"></i>
                        Creative Thinker
                        <br />
                        <i className="fas fa-check" id="checkmark"></i>
                        Collaborative & Independent
                        <br />
                        <i className="fas fa-check" id="checkmark"></i>
                        Quick Learner
                        <br />
                        <i className="fas fa-check" id="checkmark"></i>
                        Excellent Time Management
                        <br />
                        <i className="fas fa-check" id="checkmark"></i>
                        Resourceful
                      </p>
                    </div>
                    <div className="col-md-6" id="toolSkills">
                      <h4>Additional Tools</h4>
                      <p id="skill-list">
                        <i className="fas fa-check" id="checkmark"></i>
                        MongoDB
                        <br />
                        <i className="fas fa-check" id="checkmark"></i>
                        MySQL
                        <br />
                        <i className="fas fa-check" id="checkmark"></i>
                        Material UI
                        <br />
                        <i className="fas fa-check" id="checkmark"></i>
                        Agile/Scrum Methodology
                        <br />
                        <i className="fas fa-check" id="checkmark"></i>
                        CircleCI
                        <br />
                        <i className="fas fa-check" id="checkmark"></i>
                        Loopback
                        <br />
                        <i className="fas fa-check" id="checkmark"></i>
                        Jira
                        <br />
                        <i className="fas fa-check" id="checkmark"></i>
                        Google Analytics
                        <br />
                        <i className="fas fa-check" id="checkmark"></i>
                        Hootsuite
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
      </div>
    );
  }
}
