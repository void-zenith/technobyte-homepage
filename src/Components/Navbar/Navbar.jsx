
import React, { useRef } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../../assets/icons/logo";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";
const NavBar = () => {
  const links = ["Home", "Services", "How_We_Work", "Our_Team", "FAQ"];
  return (
    <div>
      <Navbar className="navbar-container" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand className="navbar-container__logo">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-container__link navbar-container__navbar-link__items">
              {links.map((link) => {
                return (
                  <Nav.Link className="navbar-link__item">
                    <Link to={link} smooth={true} duration={600} spy={true}>
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
    </div>
  );
};

export default NavBar;
