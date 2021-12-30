import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import "../../assets/css/faq.css"

import { animateScroll as scroll } from 'react-scroll';

const Top = () => {
    scroll.scrollToTop();
}


const FAQ = () => {

    return (
        <div id="FAQ" className="faq-container py-5">
            <Container className="faq-content">
                <div className="catchphrase text-center">
                    <h1 className="title">F.A.Q</h1>
                </div>
                <div style={{ padding: "0px 80px" }}>
                    <Row>
                        <Col sm className="px-5 pb-5">
                            <div className='faq_questions'>Can we have a chat any time of the day?</div>
                            <p className='faq_answer pt-2'>Yes, we are available at all times during office hours.</p>
                        </Col>
                        <Col sm className="px-5 pb-5">
                            <div className='faq_questions'>How is Tushar sir?</div>
                            <p className='faq_answer pt-2'>He's doing fine, thank you very much.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm className="px-5 pb-5">
                            <div className='faq_questions'>What is the meaning of life?</div>
                            <p className='faq_answer pt-2'>The meaning of life is to seek meaning in this hostile and indifferent world.</p>
                        </Col>
                        <Col sm className="px-5 pb-5">
                            <div className='faq_questions'>Why do people take psychedelics?</div>
                            <p className='faq_answer pt-2'>People take psychedelics to experience the unexperienceable.</p>
                        </Col>
                    </Row>

                </div>

            </Container>
        </div>
    )
}

export default FAQ
