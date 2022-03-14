import React from 'react'
import { Row, Col, Form, InputGroup, Container } from 'react-bootstrap';
import { useState } from "react"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from 'react-redux';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoLinkedin } from 'react-icons/io';
import "./contact.css"
import UpArrow from '../../assets/icons/uparrow';
import { postEmail } from '../../API/Newsletter/newsSlice';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Contact = () => {

    const dispatch = useDispatch();
    const error = useSelector((state) => state.email);
    const errorMessage = error.error;
    const [show, setShow] = useState(false);
    const [isError, setIsError] = useState(false);

    const [formData, setFormData] = useState({

        email: '',
    })
    const { email } = formData;

    const submitEmail = async () => {
        await dispatch(postEmail({ email }))
            .then((response) => {
                // console.log("Email resp", response)
                if (response.meta.requestStatus === "fulfilled") {

                    setIsError(false)
                    Swal.fire({
                        title: 'Thank You',
                        text: 'We will keep updating you!',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }

                    });
                    setShow(false);
                }
                else {
                    setIsError(true);
                    setShow(true);
                }
            }
            );
    }

    const schema = yup.object().shape({
        email: yup.string()
            .required('Email is required')
            .email('Email is invalid'),

    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onChange = (e) => (
        setFormData({ ...formData, [e.target.name]: e.target.value })
    )

    const onSubmitHandler = (data) => {
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
                        <div md={{ span: 9 }} sm="true">
                            <div className="email-input py-2">

                                <InputGroup hasValidation >
                                    <InputGroup.Text id="inputGroupPrepend">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" style={{ height: '20px' }} >
                                            <path d="M2.015 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                            />
                                        </svg>

                                    </InputGroup.Text>
                                    <Form.Control
                                        type="email"
                                        placeholder="example@gmail.com"
                                        aria-describedby="inputGroupPrepend"
                                        name="email"
                                        className='input'
                                        required
                                        value={email}
                                        {...register("email")}
                                        onChange={(e => onChange(e))}
                                        aria-label="Your email address"
                                    />
                                </InputGroup>
                            </div>
                        </div>
                        <div md={3} className="py-2 text-center" sm="true">
                            <button type="submit" className="send" onClick={submitEmail}>Send</button>
                        </div>

                    </div>
                </Form>
                <br />
                {show ?
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Error!</Alert.Heading>
                        <p>
                            {errorMessage}
                        </p>
                    </Alert>
                    : null}

                <div className='find-us'>Find us on</div>
                <Container fluid className="social-media-container">
                    <Row>
                        <Col className='col-social'>
                            <a className='social-media' target="_blank" rel="noreferrer" href="https://www.facebook.com/technobyte.np">
                                <FaFacebookF />
                            </a>
                        </Col>
                        <Col className='col-social'>
                            <a className='social-media' target="_blank" rel="noreferrer" href="https://www.instagram.com/technobyte.np/">
                                <BsInstagram />
                            </a>
                        </Col>
                        <Col className='col-social'>
                            <a className='social-media' target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/technobyte-np/">
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


