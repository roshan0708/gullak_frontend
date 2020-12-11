import React from "react";
import Fade from "react-reveal/Fade";

const Cover = () => {
  return (
    <div className="bg-div" id="home">
      <div className="head mx-5">
        <div className="head-div mx-auto main-div">
          <Fade top cascade>
            <section className="div-1">
              <h1 className="head-div-first-text">
                Welcome to <span style={{ fontWeight: 900 }}>Gullक</span>
              </h1>
              <h1 className="head-div-second-text">Slogan goes here</h1>
              <p className="head-div-third-text">Another sub text</p>
            </section>
          </Fade>
        </div>
      </div>
      <Fade bottom>
        <span className="scroll-btn">
          <a href="#home">
            <span className="mouse">
              <span></span>
            </span>
          </a>
        </span>
      </Fade>
    </div>
  );
};

export default Cover;
