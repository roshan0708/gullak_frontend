import React, { useState } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import Logo from "../assets/img/piggy-bank.png";
import LockIcon from "@material-ui/icons/Lock";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const RegisterModal = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      firstName,
      lastName,
    };
    console.log("sent data is ", data);
  };

  const checkDisabled = () => {
    if (email && password && firstName && lastName) {
      return false;
    } else {
      return true;
    }
  };

  const handleClick = () => {
    setModalShow(false);
    document.getElementById("login-button").click();
  };

  return (
    <>
      <Button
        id="register-button"
        onClick={() => setModalShow(true)}
      >
        Register
      </Button>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="login"
      >
        <Container className="h-100 p-0">
          <div className="d-flex justify-content-center h-100">
            <div className="user_card">
              <div className="d-flex justify-content-center">
                <div className="brand_logo_container">
                  <img src={Logo} className="brand_logo" alt="Logo" />
                </div>
              </div>
              <div className="d-flex justify-content-center form_container">
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <AccountCircleIcon />
                      </span>
                    </div>
                    <input
                      name="firstName"
                      className="form-control input_user"
                      value={firstName}
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <AccountCircleIcon />
                      </span>
                    </div>
                    <input
                      name="lastName"
                      className="form-control input_user"
                      value={lastName}
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <AccountCircleIcon />
                      </span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      className="form-control input_user"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <LockIcon />
                      </span>
                    </div>
                    <input
                      type="password"
                      name="password"
                      className="form-control input_pass"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-flex justify-content-center mt-3 login_container">
                    <button
                      disabled={checkDisabled()}
                      type="submit"
                      name="submit"
                      className="btn login_btn"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-4">
                <div className="d-flex justify-content-center links">
                  Already have an account?{" "}
                  <a onClick={handleClick} className="ml-2">
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Modal>
    </>
  );
};

export default RegisterModal;
