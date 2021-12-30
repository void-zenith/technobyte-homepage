import React from 'react'
import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import user1 from "../../assets/image/user-1.jpg"
import { Card, Row, Col } from 'react-bootstrap';
import './services.css';

const CardCrousel = () => {

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

    return (
        <div>
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
                animationSpeed={1000}
                className=""
            >
                {/* <div className="people-cards"> */}

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
                {/* </div> */}

            </Carousel>
        </div>
    )
}

export default CardCrousel
