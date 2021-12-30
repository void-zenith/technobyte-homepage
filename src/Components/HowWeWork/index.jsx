import React from 'react'
import './howwework.css';
import { Row, Col } from 'react-bootstrap';
import { HiOutlineChatAlt2 } from 'react-icons/hi';

import { HiCollection } from 'react-icons/hi';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { HiArrowNarrowDown } from 'react-icons/hi';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { HiArrowNarrowUp } from 'react-icons/hi';


import { HiSwitchVertical } from 'react-icons/hi'
import { HiUserGroup } from 'react-icons/hi';

const HowWeWork = () => {

    return (
        <div id="How_We_Work" className="mainbody-container howwework-container">
            <div className="howwework-content pt-5">
                <div className="catchphrase text-center">
                    <h1 className='title'>How we work.</h1>
                </div>
                <div className=''>
                    <Row className="cards">
                        <Col sm className="px-5 Verify pb-3">
                            <div className="card-container">
                                <div className="card-head">
                                    <div className="method">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='icon'
                                            style={{ height: '22px', width: '22px', fill: "#17dd7d" }}
                                            class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                        </svg>
                                        {/* <HiOutlineChatAlt2 style={{ fill: "#17dd7d" }} className="icon" /> */}
                                        <div className="type">Verify</div>

                                    </div>
                                    <div className='cancel' style={{ marginLeft: "100px !important" }}>
                                        <i class="bi bi-x"></i>
                                    </div>
                                </div>

                                <div className="describe text-center">
                                    Listen to your idea and see if we are a good fit.
                                </div>
                            </div>

                        </Col>
                        <Col className='arrows' md={2}>
                            <HiArrowNarrowRight className='arrow' style={{
                                color: '#2b2b2b',
                                fontSize: 60,
                                textAlign: "center",
                                marginLeft: '46px',
                                marginRight: "15px"

                            }} />
                        </Col>

                        <Col sm className="px-5 Prototype pb-3">
                            <div className="card-container">
                                <div className="card-head">
                                    <div className="method">
                                        <HiCollection className="icon" />
                                        <div className="type">Prototype</div>
                                    </div>
                                    <div className='cancel'>
                                        <i class="bi bi-x"></i>
                                    </div>
                                </div>

                                <div className="describe text-center">
                                    Gather your requirements, and quickly build a
                                    prototype to verify your needs.
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='arrows text-center py-3'>
                        <Col className='arrows' md={6} sm>
                            <HiArrowNarrowUp className='arrow' style={{
                                color: '#2b2b2b',
                                fontSize: 60,
                                textAlign: "center",
                                marginRight: '82px',

                            }} />
                        </Col>
                        <Col className='arrows' md={6} sm>
                            <HiArrowNarrowDown className='arrow' style={{
                                color: '#2b2b2b',
                                fontSize: 60,
                                marginBottom: '10px',
                                marginLeft: '82px',

                            }} />
                        </Col>
                    </Row>
                    <Row className="cards">
                        <Col sm className="px-5 pb-3">
                            <div className="card-container">
                                <div className="card-head">
                                    <div className="method">
                                        <HiSwitchVertical className="icon" />
                                        <div className="type">Handoff</div>

                                    </div>
                                    <div className='cancel'>
                                        <i class="bi bi-x"></i>
                                    </div>
                                </div>
                                <div className="describe text-center">
                                    Test the final product and hand it over to you.
                                </div>
                            </div>
                        </Col>
                        <Col className='arrows' md={2}>
                            <HiArrowNarrowLeft className='arrow' style={{
                                color: '#2b2b2b',
                                marginTop: '5px',
                                marginLeft: '46px',
                                marginRight: "15px"

                            }} />
                        </Col>

                        <Col sm className="px-5 pb-3">
                            <div className="card-container">
                                <div className="card-head">
                                    <div className="method">
                                        <HiUserGroup className="icon" />
                                        <div className="type">Collaborate</div>
                                    </div>

                                    <div className='cancel'>
                                        <i class="bi bi-x"></i>
                                    </div>
                                </div>

                                <div className="describe text-center">
                                    Seek continuous feedback from you until
                                    the product is ready.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
    )
}

export default HowWeWork
