import React from "react";
import "../styles/navbar.css";

const Navbar = (props) => {
  let { mode, changeMode } = props;
  let lightStyle;
  let logo =
    "https://www.nestaway.com/_flash_app/immutable/assets/nestawayIcon.ad7b1cdf.svg";

  if (mode === "light") {
    lightStyle = {
      backgroundColor: "rgb(180, 180, 180)",
      color: "rgb(30,30,30)",
    };
  } else {
    lightStyle = {
      backgroundColor: "rgb(30,30,30)",
      color: "rgb(180, 180, 180)",
    };
  }

  return (
    <>
      <nav id="navbar" style={lightStyle}>
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="company-name">NestAway</h1>

        {props.mode === "light" && (
          <div className="switch">
            <p className="mode-name">Dark Mode</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-toggle-off toggle"
              viewBox="0 0 16 16"
              onClick={changeMode}
            >
              <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8M0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5" />
            </svg>
          </div>
        )}

        {props.mode === "dark" && (
          <div className="switch">
            <p className="mode-name">Light Mode</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-toggle-on toggle"
              viewBox="0 0 16 16"
              onClick={changeMode}
            >
              <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8" />
            </svg>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
