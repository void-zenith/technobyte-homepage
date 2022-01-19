import React from 'react'
import './howwework.css';
import { Row, Col } from 'react-bootstrap';
import { HiCollection } from 'react-icons/hi';
import { HiSwitchVertical } from 'react-icons/hi'
import { HiUserGroup } from 'react-icons/hi';

const HowWeWork = () => {


    return (
        <div id="How_We_Work" className="mainbody-container howwework-container">
            <div className="howwework-content pt-5">
                <div className="catchphrase text-center">
                    <h1 className='title'>How we work.</h1>
                </div>
                <div>
                    <Row className="cards">
                        <Col sm className="Verify py-2">
                            <div className="card-container">
                                <div className="card-head">
                                    <div className="method">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='icon'
                                            style={{ height: '22px', width: '22px', fill: "#17dd7d" }}
                                            class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                        </svg>
                                        <div className="type">Verify</div>

                                    </div>
                                    <div className='cancel' style={{ marginLeft: "100px !important" }}>
                                        <i class="bi bi-x"></i>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="describe text-center">

                                        Listen to your idea and check if we are a good fit.

                                    </div>
                                </div>

                            </div>

                        </Col>
                        <Col className='arrows' md={2}>
                            <svg xmlns="http://www.w3.org/2000/svg" className='arrow-right' width="146.754" height="32.785" viewBox="0 0 166.754 77.785">
                                <path id="Path_2"
                                    style={{
                                        fill: 'none',
                                        stroke: '#707070',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                        strokeWidth: '2px',
                                    }}
                                    data-name="Path 2" class="cls-1" d="M103.457,5l63.927,37.524m0,0L103.457,80.048m63.927-37.524H3" transform="translate(-2 -3.631)" />
                            </svg>
                        </Col>
                        <Col sm className="Prototype py-2">
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
                                <div className="card-body">
                                    <div className="describe text-center">
                                        <div>
                                            Gather your requirements, and quickly build a
                                            prototype to verify your needs.
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='arrows text-center py-3'>
                        <Col className='arrows' md={6} sm>

                            <svg xmlns="http://www.w3.org/2000/svg"
                                style={{
                                    marginRight: '100px',

                                }}
                                className='arrow-up'
                                width="77.785" height="66.753" viewBox="0 0 77.785 166.753">
                                <path id="Path_2" data-name="Path 2" d="M103.457,5l63.927,37.524m0,0L103.457,80.048m63.927-37.524H3"
                                    transform="translate(-3.631 168.753) rotate(-90)" fill="none" stroke="#707070" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </Col>
                        <Col className='arrows' md={6} sm>

                            <svg
                                style={{
                                    marginLeft: '100px',
                                }}
                                className='arrow-down'
                                xmlns="http://www.w3.org/2000/svg" width="77.785" height="66.753" viewBox="0 0 77.785 166.753">
                                <path id="Path_2" data-name="Path 2" d="M103.457,5l63.927,37.524m0,0L103.457,80.048m63.927-37.524H3"
                                    transform="translate(81.417 -2) rotate(90)" fill="none" stroke="#707070" strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="2"
                                />
                            </svg>
                        </Col>
                    </Row>
                    <Row className="cards">
                        <Col sm className="py-2">
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
                                <div className="card-body">
                                    <div className="describe text-center">
                                        Test the final product and hand it over to you.
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className='arrows' md={2}>

                            <svg xmlns="http://www.w3.org/2000/svg"

                                width="66.753" style={{
                                    marginLeft: '40px'
                                }}
                                className='arrow-left'
                                height="77.785" viewBox="0 0 166.753 77.785">
                                <path id="Path_2" data-name="Path 2" d="M103.457,5l63.927,37.524m0,0L103.457,80.048m63.927-37.524H3" transform="translate(168.753 81.417) rotate(180)"
                                    fill="none" stroke="#707070" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </Col>

                        <Col sm className="py-2">
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
                                    <div></div>
                                    <div>
                                        Seek continuous feedback from you until
                                        the product is ready.
                                    </div>
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
