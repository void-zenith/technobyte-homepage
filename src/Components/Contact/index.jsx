import React from 'react'
import { Row, Col, Form, InputGroup, Container } from 'react-bootstrap';
import { EnvelopeFill } from 'react-bootstrap-icons';
import { ArrowUp } from 'react-bootstrap-icons';

import { HiArrowNarrowUp } from 'react-icons/hi'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoLinkedin } from 'react-icons/io';
import { animateScroll as scroll } from 'react-scroll';
import "./contact.css"
import UpArrow from '../../assets/icons/uparrow';

const Top = () => {
    scroll.scrollToTop();
}

const Contact = () => {
    return (
        <div id='Contact' className="contact-container">
            <div className="contact-content px-2">
                <div className="text-center" style={{ marginRight: "23px" }}>

                    <UpArrow />
                </div>
                <div className='pt-5'>Back to top</div>
                <div className="catchphrase text-center">
                    <h5>Want to work together? Let's have a chat.</h5>
                    <h7>Send us your email and we will get back to <br /> you within an hour</h7>
                </div>
                <div className="email">
                    <div md={{ span: 9 }} sm>
                        <div className="email-input py-2">
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" style={{ height: '20px' }} >
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                        />
                                    </svg>
                                    {/* <EnvelopeFill /> */}
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

                    </div>
                    <div md={3} className="py-2 text-center" sm>
                        <button className="send">Send</button>
                    </div>
                </div>

                <div className='find-us'>Find us on</div>
                <Container fluid className="social-media-container">
                    <Row>
                        <Col md={{ span: 3 }} className='social-media'>
                            <FaFacebookF />
                        </Col>
                        <Col md={{ span: 3 }} className='social-media'>
                            <BsInstagram />
                        </Col>
                        <Col md={3} className='social-media'>
                            <IoLogoLinkedin />
                        </Col>
                    </Row>
                </Container>
                <div className="copyright text-center">Copyright 2021 &#169; Technobyte Software and Solutions Private Limited</div>
            </div>
        </div >
    )
}

export default Contact
