import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Img1 from "../../assets/img/dollar.png";
import Img2 from "../../assets/img/maths.png";
import Img3 from "../../assets/img/wallet.png";
import Fade from "react-reveal/Fade";

const Services = () => {
    return (
      <>
        <div className="main-div section-services" id="services">
        <Fade right big cascade>
          <Row className="justify-content-center text-center">
            <Col lg={8} md={10}>
              <div className="header-section">
                <h2 className="title">
                  Our <span>Services</span>
                </h2>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi asperiores dolore, necessitatibus officiis possimus
                  praesentium quas.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="single-service">
                <div className="part-1">
                  <img src={Img1} alt="Wallet Img" />
                  <h3 className="title">Save by Amount</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi asperiores dolore, necessitatibus officiis possimus
                    praesentium quas.
                  </p>
                  <a href="/">Read More</a>
                </div>
              </div>
            </Col>

            <Col>
              <div className="single-service">
                <div className="part-1">
                  <img src={Img2} alt="Dollar Img" />
                  <h3 className="title">Save by Rate</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi asperiores dolore, necessitatibus officiis possimus
                    praesentium quas.
                  </p>
                  <a href="/">Read More</a>
                </div>
              </div>
            </Col>

            <Col>
              <div className="single-service">
                <div className="part-1">
                  <img src={Img3} alt="Math Img" />
                  <h3 className="title">E-Wallet</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi asperiores dolore, necessitatibus officiis possimus
                    praesentium quas.
                  </p>
                  <a href="/">Read More</a>
                </div>
              </div>
            </Col>
          </Row>
          </Fade>
        </div>
      </>
    );
}

export default Services
