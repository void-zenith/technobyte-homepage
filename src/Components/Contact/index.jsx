import React from 'react'
import { Row, Col, Form, InputGroup, Container } from 'react-bootstrap';
import { EnvelopeFill } from 'react-bootstrap-icons';
import { ArrowUp } from 'react-bootstrap-icons';
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa';

import "./contact.css"

const Contact = () => {
    return (
        <div id='Contact' className="contact-container">
            <div className="arrow-top">
                <ArrowUp
                    style={{
                        background: "#515753",
                        color: "#17dd7d",
                        height: "34px",
                        width: "34px",
                        borderRadius: "50%",
                        padding: "5",
                        // position: "sticky",
                        cursor: "pointer",

                    }}
                />
            </div>
            <div className="contact-content px-2">

                <div className='mt-4'>Back to top</div>
                <div className="catchphrase text-center">
                    <h5>Want to work together? Let's have a chat.</h5>
                    <h7>Send us your email and we will get back to <br /> you within an hour</h7>
                </div>
                <Row className="email">
                    <Col md={{ span: 9 }} sm>
                        <div className="email-input py-2">
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">
                                    <EnvelopeFill className='email-icon' />
                                </InputGroup.Text>
                                <Form.Control
                                    type="email"
                                    placeholder="example@gmail.com"
                                    aria-describedby="inputGroupPrepend"
                                    name="email"
                                    className='input'

                                />
                            </InputGroup>
                        </div>

                    </Col>
                    <Col md={3} className="py-2 text-center" sm>
                        <button className="send">Send</button>
                    </Col>
                </Row>

                <div className='find-us'>Find us on</div>
                <Container fluid className="social-media-container">
                    <Row>
                        <Col md={{ span: 3 }} className='social-media'>
                            <FaFacebookF />
                        </Col>
                        <Col md={{ span: 3 }} className='social-media'>
                            <AiFillInstagram />
                        </Col>
                        <Col md={3} className='social-media'>
                            <div className='text-center'>
                                <FaLinkedinIn />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="copyright text-center">Copyright 2021 &#169; Technobyte Software and Solutions Private Limited</div>
            </div>
        </div >
    )
}

export default Contact
