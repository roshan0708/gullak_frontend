import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/img/piggy-bank.png";
import { Fade } from "react-reveal";

const NavbarComponent2 = () => {
  const changeBackground = () => {
    let header = document.getElementsByClassName("header-nav")[0];
    if (window.scrollY < 100) {
      header.classList.remove("sticky");
    } else {
      header.classList.add("sticky");
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <Navbar
        className={`header-nav light`}
        fixed="top"
        collapseOnSelect
        expand="lg"
      >
        <Fade left cascade>
          <Navbar.Brand href="/" className="brand-name ml-5">
            <img
              src={Logo}
              width="auto"
              height="60"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
        </Fade>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Fade right cascade>
              <Nav.Link className="px-4" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="px-4" href="/profile">
                Profile
              </Nav.Link>
            </Fade>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavbarComponent2;
