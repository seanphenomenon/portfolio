import * as React from "react";

function SvgTopComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
      <path
        fill="#8854d0"
        d="M0 288l80-48c80-48 240-144 400-144s320 96 480 122.7c160 26.3 320-15.7 400-37.4l80-21.3V0H0z"
      />
    </svg>
  );
}

export default SvgTopComponent;
