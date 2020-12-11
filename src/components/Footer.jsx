import React from "react";

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: "#343a40" }}>
      <div
        className="footer-text text-center py-3"
        style={{
          color: "rgba(255,255,255,.5)",
          fontFamily: "Saira Extra Condensed, sans-serif",
          fontSize: "20px",
          letterSpacing: ".5px",
        }}
      >
        © Copyright 2020 - Sean Harrell.
      </div>
    </footer>
  );
}
