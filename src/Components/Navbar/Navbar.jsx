
import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import Logo from "../../assets/icons/logo";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

const NavBar = () => {
  const links = ["Home", "Services", "How_We_Work", "Our_Team", "FAQ"];

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbar-container").style.top = "0";
    } else {
      document.querySelector(".navbar-container").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }

  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open);
  }

  const [openNavbar, setOpenNavbar] = useState(false)
  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  }

  return (
    <div>
      <Navbar collapseOnSelect className="navbar-container" expand="lg" >
        <Container>
          <Navbar.Brand className="navbar-container__logo">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle onClick={toggle} aria-controls="responsive-navbar-nav">
            {/* Close mark */}
            <div
              className={`close-icon ${open ? "open" : ""}`}>

              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* close mark ends */}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`  me-auto navbar-container__link navbar-container__navbar-link__items`}>
              {links.map((link) => {
                return (
                  <Nav.Link className="navbar-link__item" key={link}>
                    <Link onClick={toggleNavbar} to={link} smooth={true} duration={600} spy={true}>
                      {link.includes("_") ? link.replaceAll("_", " ") : link}
                    </Link>
                  </Nav.Link>
                );
              })}

              <Nav.Link className="navbar-container__contactus">

                <Link
                  to="Contact"
                  smooth={true}
                  duration={600}
                  className="contact-container"
                  spy={true}
                >
                  Contact us
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div >
  );
};

export default NavBar;
