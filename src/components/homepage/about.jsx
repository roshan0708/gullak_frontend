import React from "react";
import { Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Img from "../../assets/img/light-bulb.png";

const About = () => {

  return (
    <div className="main-div" id="about">
      <Fade left cascade>
        <section className="div-1 about">
          <h1 className="heading">What we do?</h1>
          <div>
            <p className="text mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              accumsan erat. Mauris congue nisl et nisi rutrum, a venenatis
              lorem cursus. Quisque feugiat neque id nisl ultrices, sollicitudin
              dictum ligula venenatis. Curabitur nisl dolor, venenatis eu congue
              in, ullamcorper vel enim. Donec porttitor tincidunt urna.
              Phasellus ornare tortor nibh, sit amet dapibus enim commodo a.
              Cras turpis massa, porttitor sed arcu eget, porttitor ullamcorper
              urna. Sed dui neque, fringilla eget sapien in, malesuada
              condimentum sapien.
            </p>
          </div>
          <Row className="inner-section my-3">
            <Col lg={8} className="align-center">
              <div className="text">
                Curabitur consequat purus sed nulla facilisis semper. Praesent
                non ante sit amet justo pulvinar fermentum. Maecenas consequat
                condimentum diam, et ullamcorper est luctus ac. Morbi commodo
                magna sed massa accumsan congue. Nulla at tortor lacinia,
                accumsan urna non.Donec porttitor tincidunt urna. Phasellus
                ornare tortor nibh, sit amet dapibus enim commodo a. Cras turpis
                massa, porttitor sed arcu eget, porttitor ullamcorper urna. Sed
                dui neque, fringilla eget sapien in, malesuada condimentum
                sapien.
              </div>
            </Col>
            <Col lg={4} className="justify-align-center">
              <img src={Img} alt="Light Bulb Img" className="mt-2" />
            </Col>
          </Row>
          <p className="text my-3">
            Morbi aliquam tincidunt accumsan. Etiam viverra enim ut purus congue
            porttitor.
          </p>
        </section>
      </Fade>
    </div>
  );
};

export default About;
