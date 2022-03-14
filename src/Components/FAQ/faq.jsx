import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../API/FAQ/faqSlice";

import { Row, Card, Col, Container } from "react-bootstrap";
import "./faq.css";
import Question from './Question';
import desktopwomen from '../../assets/image/faqdesktop.svg';
import mobilewomen from '../../assets/image/illustration-woman-online-mobile.svg';

const FAQ = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, []);

    const { data, loading } = useSelector((state) => state.data);
    // console.log(data);



    return (
        <div id="FAQ" className="faq-container py-5">
            <Container className="faq-content">
                <div className="catchphrase text-center">
                    <h1 className="title">F.A.Q</h1>
                </div>
                {/* <div className='faq-qa'> */}
                {/* {data.map((faq) =>
                        <div className="cards">
                            <Row className="row">
                                <Col key={faq.id} sm className="col px-5 pb-5">
                                    <div className='faq_questions'>{faq.question}</div>
                                    <p className='faq_answer pt-2'>{faq.answer}</p>
                                </Col>
                            </Row>
                        </div>

                    )} */}
                <div>
                    <div className="container">
                        <section className="faq pb-5">
                            <div className="faq__left">
                                <picture className="faq__picture">
                                    <source
                                        srcSet={mobilewomen}
                                        media="(max-width: 992px)"

                                    />
                                    <img
                                        src={desktopwomen}
                                        alt="true"
                                        aria-hidden="true"
                                        className="desktop"
                                    />
                                </picture>
                            </div>

                            <div className="faq__right">
                                {/* <h1 className="faq__heading">FAQ</h1> */}
                                <dl>
                                    {data.map((faq, index) => (
                                        <Question
                                            index={index}
                                            key={index}
                                            question={faq.question}
                                            answer={faq.answer}
                                        />
                                    ))}
                                </dl>
                            </div>
                        </section>
                    </div>
                </div>
                {/* </div> */}
            </Container>
        </div>
    )
}

export default FAQ
