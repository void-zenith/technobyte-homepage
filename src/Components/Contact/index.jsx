import React from 'react'
import { Row, Col, Form, InputGroup, Container } from 'react-bootstrap';
import { useState } from "react"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SweetAlert from 'react-bootstrap-sweetalert';
import { useDispatch } from 'react-redux';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoLinkedin } from 'react-icons/io';
import "./contact.css"
import UpArrow from '../../assets/icons/uparrow';
import { postEmail } from '../../API/Newsletter/newsSlice';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { unwrapResult } from '@reduxjs/toolkit';

const Contact = () => {

    const [show, setShow] = useState(true);
    const dispatch = useDispatch();
    const error = useSelector((state) => state.email);
    const status = useSelector((state) => state.loading)
    const errormsg = error.error;
    const [alert, setAlert] = React.useState(null);
    const [fromData, setFormData] = useState({

        email: '',
    })

    const { email } = fromData;


    const submitEmail = async () => {
        await dispatch(postEmail({ email }))
            .then((response) => {
                console.log("hurray", response.meta.requestStatus)
                if (response.meta.requestStatus === "fulfilled") {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Thank you for Contacting Us',
                        icon: 'success'

                    });
                    // 
                    // setAlert(
                    //     <SweetAlert
                    //         success
                    //         style={{ display: "block", marginTop: "-100px" }}
                    //         title="Login Successful!"
                    //         onConfirm={() => hideAlert()}
                    //         onCancel={() => hideAlert()}
                    //         confirmBtnBsStyle="success"
                    //         btnSize=""
                    //     >
                    //         Login Successfull
                    //     </SweetAlert>
                    // );
                    console.log("hurray!", email);
                }
            })

        const errorMessage = errormsg
        // document.querySelector('.error').innerHTML = `${errorMessage}`
        console.log("Error ", errormsg);
        console.log("under f");

    }
    const hideAlert = () => {
        setAlert(null);
    };
    const schema = yup.object().shape({
        email: yup.string()
            .required('Email is required')
            .email('Email is invalid'),

    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onChange = (e) => (
        setFormData({ ...fromData, [e.target.name]: e.target.value })
    )

    const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
    };
    return (
        <div id='Contact' className="contact-container">
            <div className="contact-content px-2">
                <div className="text-center" style={{ marginRight: "23px" }}>

                    <UpArrow />
                </div>
                <div className='pt-5'>Back to top</div>
                <div className="catchphrase text-center">
                    <h5>Want to work together? Let's have a chat.</h5>
                    <p>Send us your email and we will get back to <br /> you within an hour</p>
                </div>
                <Form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="email">
                        <div md={{ span: 9 }} sm>
                            <div className="email-input py-2">

                                <InputGroup hasValidation >
                                    <InputGroup.Text id="inputGroupPrepend">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" style={{ height: '20px' }} >
                                            <path d="M2.015 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
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
                                        required
                                        value={email}
                                        onChange={(e => onChange(e))}
                                        name="email_address"
                                        {...register("email")}

                                        aria-label="Your email address" required="" type="email"

                                    />
                                </InputGroup>
                            </div>
                        </div>
                        <div md={3} className="py-2 text-center" sm>
                            <button type="submit" className="send" onClick={submitEmail}>Send</button>
                        </div>

                    </div>
                </Form>

                <div>
                    <p className="error">{errors.email?.message}</p></div>

                <div className='find-us'>Find us on</div>
                <Container fluid className="social-media-container">
                    <Row>
                        <Col className='col-social'>
                            <a className='social-media' target="_blank" href="https://www.facebook.com/technobyte.np">
                                <FaFacebookF />
                            </a>
                        </Col>
                        <Col className='col-social'>
                            {/* <BsInstagram /> */}
                            <a className='social-media' target="_blank" href="https://www.instagram.com/technobyte.np/">
                                <BsInstagram />
                            </a>
                        </Col>
                        <Col className='col-social'>
                            {/* <IoLogoLinkedin /> */}
                            <a className='social-media' target="_blank" href="https://www.linkedin.com/company/technobyte-np/">
                                <IoLogoLinkedin />
                            </a>
                        </Col>
                    </Row>
                </Container>
                <div className="copyright text-center">Copyright 2021 &#169; Technobyte Software and Solutions Private Limited</div>
            </div>
        </div >
    )
}

export default Contact


