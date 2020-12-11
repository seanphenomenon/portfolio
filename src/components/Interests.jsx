import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export default function Interests() {
  return (
    <div>
      <section className=" p-5 align-items-center mb-5" id="interests">
        <div className="w-100">
          <h2 className="p-2 mb-3 mt-3  text-lg-left text-sm-center">
            Interests
          </h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-start">
            <div className="p-2 mr-2 col-md-7 col-sm-12" id="info">
              <Fade>
                <p style={{ maxWidth: "950px", textAlign: "left" }}>
                  Outside of being a web developer, I enjoy playing my acoustic
                  guitar, trying new food spots, supporting local artists &
                  businesses, as well as spending quality time with friends and
                  family.{" "}
                </p>
              </Fade>
            </div>
            <Zoom>
              <div className="col-md-5 col-sm-12">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/1615/1615027.svg"
                  alt="guitar"
                  id="guitar-img"
                />
              </div>
            </Zoom>
          </div>
        </div>
      </section>
      {/* <hr /> */}
    </div>
  );
}
