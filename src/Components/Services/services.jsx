import React, { useState } from 'react'
import "./services.css"

import { Card, Row, Col } from 'react-bootstrap';
import user1 from "../../assets/image/user-1.jpg"
// import Carousel from "react-elastic-carousel";
import PatchIcon from '../../assets/icons/index';
import { BsCircleFill } from 'react-icons/bs';
import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const Services = () => {

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
        { name: 'Web development.' },
        { name: 'Mobile application development.' },
        { name: 'MVP design and development.' },
    ]

    const col2 = [
        { name: 'UI/UX design.' },
        { name: 'Mobile Application design.' },
        { name: 'Business software development.' },

    ]


    return (
        <div id='Services' className="services-container py-5">
            <div className="services-content px-2 container">

                <div className="catchphrase text-center">
                    <h1 className='title'>Have an idea? Here's what <br /> we can do for you.</h1>
                </div>
                <Card className="our-services">
                    <div className="top-container bio">
                        <div className='yellow'>
                            <BsCircleFill />
                        </div>
                        <div className='green'>
                            <BsCircleFill />
                        </div>
                        <div className='cancel'>
                            <i className="bi bi-x"></i>
                        </div>
                    </div>
                    <Row className="px-5">
                        <Col sm>
                            {col1.map((type, index) => (
                                <p className="service-name" key={index}>
                                    <PatchIcon className="patch-icon" />
                                    {type.name}
                                </p>
                            ))}
                        </Col>
                        <Col sm>
                            {col2.map((type, index) => (
                                <p className="service-name" key={index}>
                                    <PatchIcon className="patch-icon" />
                                    {type.name}
                                </p>
                            ))}
                        </Col>
                    </Row>
                </Card>
                <div className="catchphrase text-center pt-5">
                    <h1 className='title'>What people say about us.</h1>
                </div>
                <Carousel
                    plugins={[
                        'infinite',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3
                            }
                        },
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 2000,
                            }
                        },

                    ]}
                    breakpoints={{
                        640: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                },
                            ]
                        },
                        900: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 2
                                    }
                                },
                            ]
                        }
                    }}
                    animationSpeed={4000}
                    className="people-cards"
                >
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
