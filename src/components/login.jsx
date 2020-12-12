import React, { useState } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import Logo from "../assets/img/piggy-bank.png";
import LockIcon from "@material-ui/icons/Lock";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const LoginModal = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log("sent data is ", data);
  };

  const checkDisabled = () => {
    if (email && password) {
      return false;
    } else {
      return true;
    }
  };

  const handleClick = () => {
    setModalShow(false);
    document.getElementById("register-button").click();
  };

  return (
    <>
      <Button
        id="login-button"
        onClick={() => setModalShow(true)}
      >
        Log In
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
                      Sign In
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-4">
                <div className="d-flex justify-content-center links">
                  Don't have an account?{" "}
                  <a onClick={handleClick} className="ml-2">
                    Sign Up
                  </a>
                </div>
                <div className="d-flex justify-content-center links">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Modal>
    </>
  );
};

export default LoginModal;
