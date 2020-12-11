import React from "react";

export default function Footer() {
  return (
    <footer className="footer-container" style={{ backgroundColor: "#343a40" }}>
      <div
        className="footer-text text-center py-3"
        style={{
          color: "rgba(255,255,255,.5)",
          fontFamily: "Saira Extra Condensed, sans-serif",
          fontSize: "20px",
          letterSpacing: ".5px",
        }}
      >
        &#169; Copyright 2020 - Sean Harrell.
        <div>
          <a href="http://www.linkedin.com/in/seanharrell">
            <i
              className="fab fa-linkedin-in"
              id="footer-icon"
              style={{ fontSize: "1em", padding: "10px", color: "#fff" }}
            ></i>
          </a>
          <a href="http://www.github.com/seanphenomenon">
            <i
              className="fab fa-github"
              id="footer-icon"
              style={{ fontSize: "1em", padding: "10px", color: "#fff" }}
            ></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
