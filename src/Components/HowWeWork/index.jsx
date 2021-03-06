import React, { useRef } from "react";
import "./howwework.css";
import { Row, Col, Container, Card } from "react-bootstrap";
import { IoMdChatboxes } from "react-icons/io";

import CurvedArrow from "react-curved-arrow";

import { RiArrowUpDownLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";

const HowWeWork = () => {
  return (
    <div id="How_We_Work" className="mainbody-container">
      <div className="howwework-content">
        <div className="catchphrase text-center">
          <h2 className="title">How we work?</h2>
        </div>
        <div>
          <Row className="mb-5">
            <Col sm className="px-5 Verify pb-5">
              <div className="card-container">
                <div className="card-head">
                  <div className="method">
                    <IoMdChatboxes className="icon" />
                    <div className="type">Verify</div>
                  </div>
                  <div className="cancel">
                    <i class="bi bi-x"></i>
                  </div>
                </div>

                <div className="describe text-center">
                  Listen to your idea and see if we are a good fit.
                </div>
              </div>
            </Col>
            {/* <CurvedArrow /> */}
            {/* <picture>
                            <source media="(min-width: 900px)" srcset="BigImage.png" />
                            <source media="(min-width: 480px)" srcset="MediumImage.png" />
                            <img src="OtherImage.png" alt="IfItDoesntMatchAnyMedia" />
                        </picture> */}
            {/* 
                        <Col>
                            <img src="https://img.icons8.com/windows/32/000000/right3.png" style={{ color: "white", marginLeft: "200" }} height="20" width="100" />

                        </Col> */}

            <Col sm className="px-5 Prototype pb-5">
              <div className="card-container">
                <div className="card-head">
                  <div className="method">
                    <IoMdChatboxes className="icon" />
                    <div className="type">Prototype</div>
                  </div>
                  <div className="cancel">
                    <i class="bi bi-x"></i>
                  </div>
                </div>

                <div className="describe text-center">
                  Gather your requirements, and quickly build a prototype to
                  verify your needs.
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm className="px-5 pb-5">
              <div className="card-container">
                <div className="card-head">
                  <div className="method">
                    <RiArrowUpDownLine className="icon" />
                    <div className="type">Handoff</div>
                  </div>
                  <div className="cancel">
                    <i class="bi bi-x"></i>
                  </div>
                </div>
                <div className="describe text-center">
                  Test the final product and hand it over to you.
                </div>
              </div>
            </Col>
            <Col sm className="px-5 pb-5">
              <div className="card-container">
                <div className="card-head">
                  <div className="method">
                    <IoIosPeople className="icon" />
                    <div className="type">Collaborate</div>
                  </div>

                  <div className="cancel">
                    <i class="bi bi-x"></i>
                  </div>
                </div>

                <div className="describe text-center">
                  Seek continuous feedback from you until the product is ready.
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
