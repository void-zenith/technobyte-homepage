import React from 'react'
import Code from "../../assets/image/code";
import { Row, Col, Container } from "react-bootstrap";
import "../../assets/css/faq.css"

const FAQ = () => {
    return (
        <div id="faq" className="mainbody-container">
            <div className="mainbody-container__left">
                <div className="left-container__content">
                    <h1 className="FAQ-heading">F.A.Q</h1>
                </div>
                <Container style={{ padding: 20 }}>
                    <Row>
                        <Col sm className="px-4 pb-5">
                            <div className='faq_questions'>Can we have a chat any time of the day?</div>
                            <p className='faq_answer pt-2'>Yes, we are available at all times during office hours.</p>
                        </Col>
                        <Col sm className="px-4 pb-5">
                            <div className='faq_questions'>How is Tushar sir?</div>
                            <p className='faq_answer pt-2'>He's doing fine, thank you very much.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm className="px-4 pb-5">
                            <div className='faq_questions'>What is the meaning of life?</div>
                            <p className='faq_answer pt-2'>The meaning of life is to seek meaning in this hostile and indifferent world.</p>
                        </Col>
                        <Col sm className="px-4 pb-5">
                            <div className='faq_questions'>Why do people take psychedelics?</div>
                            <p className='faq_answer pt-2'>People take psychedelics to experience the unexperienceable.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default FAQ
