import React, { useState } from 'react'
import "./services.css"

import { Card, Row, Col } from 'react-bootstrap';
import user1 from "../../assets/image/user-1.jpg"
// import Carousel from "react-elastic-carousel";
import PatchIcon from '../../assets/icons/index';
import { BsCircleFill } from 'react-icons/bs';
import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            alt: 'Samikshya',
            name: 'Samikshya',
            position: 'CEO WeirdLabs India',
            description: '"Working with technobyte has always been a joy. The CEO is a darling"',
        },
        {
            imageSrc: user1,
            alt: 'Rita',
            name: 'Rita',
            position: 'CEO WeirdLabs India',
            description: '"Working with technobyte has always been a joy. The CEO is a darling"',
        },
        {
            imageSrc: user1,
            alt: 'Wendy',
            name: 'Wendy',
            position: 'CEO WeirdLabs India',
            description: '"Working with technobyte has always been a joy. The CEO is a darling"',
        },
        {
            imageSrc: user1,
            alt: 'Irene',
            name: 'Irene',
            position: 'CEO WeirdLabs India',
            description: '"Working with technobyte has always been a joy. The CEO is a darling"',
        },

        {
            imageSrc: user1,
            alt: 'Jimmie',
            name: 'Jimmie',
            position: 'CEO WeirdLabs India',
            description: '"Working with technobyte has always been a joy. The CEO is a darling"',
        },

        {
            imageSrc: user1,
            alt: 'Rossy',
            name: 'Rossy',
            position: 'CEO WeirdLabs India',
            description: '"Working with technobyte has always been a joy. The CEO is a darling"',
        },

        {
            imageSrc: user1,
            alt: 'yerimi',
            name: 'yerimi',
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

    var settings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,

        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
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
            </div>
            <div className="catchphrase text-center pt-5">
                <h1 className='title'>What people say about us.</h1>
            </div>
            <div className='carousel'>
                <Slider {...settings}>
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
                </Slider>
            </div>


        </div >

    )
}

export default Services
