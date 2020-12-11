import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <div className="contact-div" id="contact">
      <div className="head mx-5">
        <div className="main-div">
          <Fade top cascade>
            <section className="div-1 contact">
              <h2 className="my-3 heading" style={{ textAlign: "center" }}>
                <span style={{ color: "rgb(82, 125, 255)" }}>Get </span>In Touch
              </h2>
              <p>
                Have doubts? Need something? We're always here to answer your
                queries. Click on the button below, drop a message and we'll try
                our best to get back to you!
              </p>
              <a href="#home" className="button btn btn-outline-success my-3">
                Say Hello
              </a>
            </section>
          </Fade>
          <p className="footer">
            Designed & Built by Team Neutrinos{" "}
            <span style={{ color: "red" }}>❤</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
