import React from "react";

export default class Interests extends React.Component {
  render() {
    return (
      <div>
        <section className=" p-5 align-items-center" id="interests">
          <div className="w-100">
            <h2 className="p-2 mb-3 mt-3">Interests</h2>
            <div className="resume-item d-flex flex-column flex-md-row justify-content-center">
              <div className="p-2 mr-2" id="info">
                <p>
                  Outside of being a web developer, I enjoy playing my acoustic
                  guitar, trying new food spots, supporting local artists &
                  businesses, as well as spending quality time with friends and
                  family.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr />
      </div>
    );
  }
}
