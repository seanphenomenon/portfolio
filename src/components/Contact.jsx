import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.target,
        "user_Bl2lJDuH8sR4jBj6wqDkP"
      )
      .then(
        (result) => {
          console.log("Message sent successfully!", result.status, result.text);
        },
        (error) => {
          console.log(" Message sent FAILED..", error.text);
        }
      );
  }

  return (
    <div className="parallax">
      <section className=" p-5 align-items-center" id="contact">
        <div className="w-100">
          <h2 className="p-2 mb-3 mt-2" id="contact-title">
            Contact
          </h2>
          <div className="d-flex flex-column flex-md-row  mb-5">
            <div className="p-2 mr-2">
              <p id="contact-text">Send a message and let's connect!</p>
            </div>
          </div>
          <form className="form-group  col-lg-6 col-md-12" onSubmit={sendEmail}>
            <label id="label">Name</label>
            <input className="form-control " type="text" name="user_name" />
            <br />
            <label id="label">Phone Number</label>
            <input className="form-control" type="tel" name="contact_number" />
            <br />
            <label id="label">Email Address</label>
            <input
              className="form-control"
              type="email"
              name="user_email"
              placeholder="you@example.com"
              style={{ padding: "8px" }}
            />

            <br />
            <label id="label">Message</label>
            <textarea
              className="form-control"
              name="message"
              rows="3"
              placeholder="How can I help you?"
            />
            <br />
            <input
              className="btn btn-primary btn-lg btn-block"
              data-toggle="modal"
              data-target="#exampleModal"
              type="submit"
              value="Send"
            />
          </form>
          {/* ---- Modal -----*/}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  className="modal-body"
                  style={{ textAlign: "center", fontWeight: "bold" }}
                >
                  {" "}
                  <span>
                    <i className="far fa-check-circle" id="modal"></i>
                  </span>
                  Message sent successfully!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <hr /> */}
    </div>
  );
}
