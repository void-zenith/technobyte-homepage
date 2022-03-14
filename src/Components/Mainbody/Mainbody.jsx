import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import DownArrow from "../DownArrow";
import { Link } from "react-scroll";
import { Row, Col, } from "react-bootstrap";
import "./mainbody.css";

const Mainbody = () => {

  return (
    <div id="Home" className="mainbody-container">
      <div className="content">
        <Row className="justify-content-md-center">
          <Col xs="12" md="auto">
            <div className="mainbody-container">
              <div className="container__content">
                <div className="technobyte">
                  <div className="name mb-3">Technobyte Nepal</div>
                </div>
                <div className="catchphrase">
                  <h1>
                    We build software for <br />
                    <span className="catchphrase-for">&nbsp;Startups</span> &{" "}
                    <span className="catchphrase-for">Businesses.&nbsp;</span>
                  </h1>
                </div>
                <div className="message">
                  <p className="text-center">
                    Leveraging our design, web, and mobile development team, we
                    help businesses build end to end digital products.
                  </p>
                </div>
                <div className="d-flex">
                  <div className="letsworktogether">
                    <Link to="Contact" smooth={true} duration={1000}>
                      Let's work together
                    </Link>
                    <HiArrowNarrowRight style={{ marginLeft: "6px", fontSize: "20" }} />
                  </div>
                </div>
              </div>
            </div>
            {/* <DownArrow></DownArrow> */}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Mainbody;
