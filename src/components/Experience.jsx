import React from "react";
import Fade from "react-reveal/Fade";

export default function Experience() {
  return (
    <div>
      <section className="p-5 align-items-center" id="experience">
        <div className="w-100">
          <h2 className="p-2 mb-5 mt-4" id="experience-title">
            Experience
          </h2>
          <div
            className="d-flex flex-column flex-md-row justify-content-start mb-5"
            id="experience-container"
          >
            <div className="experience-container">
              <div className="p-2">
                <h4 className="mb-0">Public Information Clerk</h4>
                {/* hidden date below on md and up*/}
                <Fade>
                  <div className="   d-md-none" id="date">
                    <span className="date">August 2018 - July 2020</span>
                  </div>
                </Fade>
                <Fade>
                  <div className="mb-3 subheading">
                    City of San Diego - Development Services
                  </div>
                  <p id="experience-info" style={{ maxWidth: "800px" }}>
                    Provided excellent customer service in a fast-paced
                    environment. <br />
                    <br />
                    Assisted in the Over-The-Counter Issuance of city permits
                    for repairs to mechanical, electrical, plumbing, and fire
                    systems.
                    <br /> <br />
                    Helped project managers and customers with the intake of
                    project re-submittals.
                    <br /> <br />
                    Utilized the Project Tracking Software to set-up new
                    projects, analyze situations, and provided a variety of
                    project status updates to agents.
                    <br /> <br />
                    Processed and distributed plans to respective development
                    discipline departments.
                    <br /> <br />
                  </p>
                </Fade>
              </div>
            </div>
            <Fade>
              <div
                className=" date text-md-right ml-4 d-none d-md-block"
                id="date"
              >
                <span className="date">August 2018 - July 2020</span>
              </div>
            </Fade>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-start mb-5">
            <div className="p-2">
              <h4 className="mb-0">Senior Secretary</h4>
              {/* hidden date below on md and up*/}
              <Fade>
                <div
                  className=" date text-md-right  d-md-none d-block"
                  id="date"
                >
                  <span className="date">August 2017 - August 2018</span>
                </div>
              </Fade>
              <Fade>
                <div className="mb-3 subheading">
                  San Diego Community College District
                </div>
                <p id="experience-info" style={{ maxWidth: "800px" }}>
                  Handled urgent administrative needs and scheduled conference
                  meetings for District faculty, staff, and administrators -
                  including Deans, Senior Secretaries, and the Vice Chancellor.
                  <br /> <br />
                  Prepared documents and all other meeting materials for
                  inclusion into Cabinet Meeting, Board Meeting, and Committee
                  Meetings on behalf of the Vice Chancellor and Interim Dean of
                  Instructional Services.
                  <br /> <br />
                  Conducted grant analysis research and developed grant tracking
                  spreadsheets in support of quarterly districtwide grant
                  reporting and annual presentation of grants and contracts to
                  the Board of Trustees.
                  <br /> <br />
                  Monitored budgets, purchases, and expenditures for department
                  through PeopleSoft and Excel.
                  <br /> <br />
                </p>
              </Fade>
            </div>
            <div
              className=" date text-md-right ml-4 d-none d-md-block"
              id="date"
            >
              <span className="date">August 2017 - August 2018</span>
            </div>
          </div>
        </div>
      </section>
      {/* <hr /> */}
    </div>
  );
}
