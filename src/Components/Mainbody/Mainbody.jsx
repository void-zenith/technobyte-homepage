import React, { useRef } from "react";
import { ArrowRight } from 'react-bootstrap-icons';
import DownArrow from "../DownArrow";
import { Link } from "react-scroll";

import { Row, Col, } from "react-bootstrap";


const Mainbody = () => {

  const myRef = useRef(null);

  return (
    <div ref={myRef} id="Home" className="mainbody-container">
      <div className="content">
        <Row className="justify-content-md-center">
          <Col xs="12" md="auto">
            <div className="mainbody-container__left">
              <div className="left-container__content">
                <div className="d-flex">
                  <div className="technobyte">Technobyte Nepal</div>
                </div>
                <div className="catchphrase">
                  <h1 className="text-responsive">
                    We build softwares for{" "}
                    <br />
                    <span className="catchphrase-for">startups</span> &{" "}
                    <span className="catchphrase-for">Businesses.</span>
                  </h1>
                </div>
                <div className="messaage">
                  <p className="text-responsive text-center">
                    Leveraging our design, web, and mobile development team,<br /> we help
                    businesses build end to end digital products.
                  </p>
                </div>
                <div className="d-flex">
                  <div className="letsworktogether">
                    <Link to="how_we_work" smooth={true} duration={1000}>Let's work together</Link>
                    <ArrowRight style={{ marginLeft: "6px", fontSize: "20" }} />
                  </div>
                </div>
              </div>
            </div>
            <DownArrow myRef={myRef}></DownArrow>
          </Col>
        </Row>
      </div>

    </div>
  );
};

export default Mainbody;
