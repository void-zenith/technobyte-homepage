
import React from 'react'
import "./services.css"

import { Card, Row, Col } from 'react-bootstrap';
import user1 from "../../assets/image/user-1.jpg"
import Carousel from "react-elastic-carousel";
import { BsPatchCheckFill } from 'react-icons/bs';

const Services = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];
    const peoplesReview = [
        {
            imageSrc: user1,
            alt: 'Preet Sonal',
            name: 'Preet Sonal',
            position: 'CEO WeirdLabs India',
            description: '"Working with technobyte has always been a joy. The CEO is a darling"',
        },
        {
            imageSrc: user1,
            alt: 'Preet Sonal',
            name: 'Preet Sonal',
            position: 'CEO WeirdLabs India',
            description: '"Working with technobyte has always been a joy. The CEO is a darling"',
        },
        {
            imageSrc: user1,
            alt: 'Preet Sonal',
            name: 'Preet Sonal',
            position: 'CEO WeirdLabs India',
            description: '"Working with technobyte has always been a joy. The CEO is a darling"',
        },
        {
            imageSrc: user1,
            alt: 'Preet Sonal',
            name: 'Preet Sonal',
            position: 'CEO WeirdLabs India',
            description: '"Working with technobyte has always been a joy. The CEO is a darling"',
        },
        {
            imageSrc: user1,
            alt: 'Preet Sonal',
            name: 'Preet Sonal',
            position: 'CEO WeirdLabs India',
            description: '"Working with technobyte has always been a joy. The CEO is a darling"',
        },

        {
            imageSrc: user1,
            alt: 'Preet Sonal',
            name: 'Preet Sonal',
            position: 'CEO WeirdLabs India',
            description: '"Working with technobyte has always been a joy. The CEO is a darling"',
        },

        {
            imageSrc: user1,
            alt: 'Preet Sonal',
            name: 'Preet Sonal',
            position: 'CEO WeirdLabs India',
            description: '"Working with technobyte has always been a joy. The CEO is a darling"',
        },

        {
            imageSrc: user1,
            alt: 'Preet Sonal',
            name: 'Preet Sonal',
            position: 'CEO WeirdLabs India',
            description: '"Working with technobyte has always been a joy. The CEO is a darling"',
        },

    ]

    const col1 = [
        { name: 'Web development' },
        { name: 'Mobile application development' },
        { name: 'MVP design and development' },
    ]

    const col2 = [
        { name: 'UI/UX design' },
        { name: 'Mobile Application design' },
        { name: 'Business software development' },

    ]


    return (
        <div id='Services' className="services-container py-5">
            <div className="services-content px-2 container">

                <div className="catchphrase text-center">
                    <h5 className='title'>Have an idea? Here's what we can do for you?</h5>
                </div>
                <Card className="our-services">
                    <div className="top-container bio">
                        <div className='cancel'>
                            <i class="bi bi-x"></i>
                        </div>
                        <div className='cancel'>
                            <i class="bi bi-x"></i>
                        </div>
                        <div className='cancel'>
                            <i class="bi bi-x"></i>
                        </div>
                    </div>
                    <Row className="px-5">
                        <Col sm>
                            {col1.map((type, index) => (
                                <p className="service-name" key={index}>
                                    <BsPatchCheckFill className="patch-icon" />
                                    {type.name}
                                </p>
                            ))}
                        </Col>
                        <Col sm>
                            {col2.map((type, index) => (
                                <p className="service-name" key={index}>
                                    <BsPatchCheckFill className="patch-icon" />
                                    {type.name}
                                </p>
                            ))}
                        </Col>
                    </Row>
                </Card>
                <div className="catchphrase text-center">
                    <h5 className='title'>What people say about us.</h5>
                </div>

                <Carousel autoPlaySpeed={1500} itemsToScroll={2} itemsToShow={2} enableTilt enableAutoPlay breakPoints={breakPoints}>
                    {peoplesReview.map((card, index) => (
                        <div className="cards">
                            <Card className="card" key={index}>
                                <div className='bio'>
                                    <div className="imgdiv pt-2">
                                        <img alt={card.alt} src={card.imageSrc} className='user-img' />
                                    </div>

                                    <div className="namepos pt-2">
                                        <p className='name'>{card.name}</p>
                                        <p className='position'>{card.position}</p>
                                    </div>

                                </div>
                                <p className="description">{card.description}</p>
                            </Card>
                        </div>
                    ))}
                </Carousel>
            </div >
        </div >
    )
}

export default Services
