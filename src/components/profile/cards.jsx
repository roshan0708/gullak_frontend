import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Img1 from "../../assets/img/credit-vector.svg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Img2 from "../../assets/img/send-vector.svg";
import Img3 from "../../assets/img/request-vector.svg";
import Fade from "react-reveal/Fade";

const Cards = () => {
    return (
      <>
        <Fade left cascade>
          <Row className="mt-3">
            <Col md={6}>
              <Card className="text-dark m-card">
                <Card.Title className="pt-3 pl-4">MY BALANCE</Card.Title>
                <div className="m-card-body flex-row">
                  <div className="flex-column pl-4 pb-3">
                    <span style={{ fontSize: "2.5rem", fontWeight: 600 }}>
                      $ 500,000
                    </span>
                    <span
                      className="btn btn-primary mt-2"
                      style={{ height: "fit-content" }}
                    >
                      <span className="btn-text">Transfer</span>
                      <span className="btn-icon">
                        <ArrowForwardIosIcon className="arrow-icon" />
                      </span>
                    </span>
                  </div>
                  <div className="m-card-img-div pb-3 pr-4">
                    <img src={Img1} alt="logo" className="m-card-img" />
                  </div>
                </div>
              </Card>
            </Col>
            <Col
              md={3}
              sm={6}
              className="send-req"
              style={{ cursor: "pointer" }}
            >
              <a className="m-card">
                <Card className="text-dark m-card text-center">
                  <div
                    className="mx-auto mb-4 pt-4"
                    style={{ maxWidth: "5rem" }}
                  >
                    <img src={Img2} alt="" />
                  </div>
                  <span>Send</span>
                </Card>
              </a>
            </Col>
            <Col
              md={3}
              sm={6}
              className="send-req"
              style={{ cursor: "pointer" }}
            >
              <a className="m-card">
                <Card className="text-dark m-card text-center">
                  <div
                    className="mx-auto mb-4 pt-4"
                    style={{ maxWidth: "5rem" }}
                  >
                    <img src={Img3} alt="" />
                  </div>
                  <span>Request</span>
                </Card>
              </a>
            </Col>
          </Row>
        </Fade>
      </>
    );
}

export default Cards
