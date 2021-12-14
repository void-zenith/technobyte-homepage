
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Logo from "../../assets/icons/logo";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.css"

const NavBar = () => {
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
              <Nav.Link className="navbar-link__item">
                <Link to="home" smooth={true} duration={600} spy={true}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="navbar-link__item">
                <Link to="services" smooth={true} duration={600} spy={true}>
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link className="navbar-link__item">
                <Link to="how_we_work" smooth={true} duration={600} spy={true}>
                  How We Work
                </Link>
              </Nav.Link>
              <Nav.Link className="navbar-link__item">
                <Link to="our_team" smooth={true} duration={600} spy={true}>
                  Our Team
                </Link>
              </Nav.Link>
              <Nav.Link className="navbar-link__item">
                <Link to="faq" smooth={true} duration={600} spy={true}>
                  FAQ
                </Link>
              </Nav.Link>
              <Nav.Link className="navbar-container__contactus">
                <Link to="contact" smooth={true} duration={600} className="contact-container" spy={true}>Contact us</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>

    </div>

  )
}

export default NavBar
