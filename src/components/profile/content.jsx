import React from "react";
import Fade from "react-reveal/Fade";
import Cards from "./cards";

const Content = () => {
  return (
    <div className="main-div" id="profile-content">
      <Fade left cascade>
        <section className="div-1 profile-content">
          <h1 className="heading">Welcome Admin...</h1>
          <div>
            <p className="text mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, ad aspernatur blanditiis, cumque, delectus
              dignissimos eaque eum eveniet illo odit.
            </p>
          </div>
          <Cards/>
        </section>
      </Fade>
    </div>
  );
};

export default Content;
