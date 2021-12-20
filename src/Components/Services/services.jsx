import React from "react";
import "./services.css";

import { Card } from "react-bootstrap";
import user1 from "../../assets/image/user-1.jpg";
import Carousel from "react-elastic-carousel";

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
      alt: "Preet Sonal",
      name: "Preet Sonal",
      position: "CEO WeirdLabs India",
      description:
        '"Working with technobyte has always been a joy. The CEO is a darling"',
    },
    {
      imageSrc: user1,
      alt: "Preet Sonal",
      name: "Preet Sonal",
      position: "CEO WeirdLabs India",
      description:
        '"Working with technobyte has always been a joy. The CEO is a darling"',
    },
    {
      imageSrc: user1,
      alt: "Preet Sonal",
      name: "Preet Sonal",
      position: "CEO WeirdLabs India",
      description:
        '"Working with technobyte has always been a joy. The CEO is a darling"',
    },
    {
      imageSrc: user1,
      alt: "Preet Sonal",
      name: "Preet Sonal",
      position: "CEO WeirdLabs India",
      description:
        '"Working with technobyte has always been a joy. The CEO is a darling"',
    },
    {
      imageSrc: user1,
      alt: "Preet Sonal",
      name: "Preet Sonal",
      position: "CEO WeirdLabs India",
      description:
        '"Working with technobyte has always been a joy. The CEO is a darling"',
    },

    {
      imageSrc: user1,
      alt: "Preet Sonal",
      name: "Preet Sonal",
      position: "CEO WeirdLabs India",
      description:
        '"Working with technobyte has always been a joy. The CEO is a darling"',
    },

    {
      imageSrc: user1,
      alt: "Preet Sonal",
      name: "Preet Sonal",
      position: "CEO WeirdLabs India",
      description:
        '"Working with technobyte has always been a joy. The CEO is a darling"',
    },

    {
      imageSrc: user1,
      alt: "Preet Sonal",
      name: "Preet Sonal",
      position: "CEO WeirdLabs India",
      description:
        '"Working with technobyte has always been a joy. The CEO is a darling"',
    },
  ];
  console.log(document.getElementsByTagName("a"));

  return (
    <div id="Services" className="services-container py-5">
      <div className="services-content px-2 container">
        <div className="catchphrase text-center">
          <h5 className="title">What people say about us</h5>
        </div>

        <Carousel
          autoPlaySpeed={1500}
          itemsToScroll={2}
          itemsToShow={2}
          enableTilt
          enableAutoPlay
          breakPoints={breakPoints}
        >
          {peoplesReview.map((card, index) => (
            <div className="cards">
              <Card className="card" key={index}>
                <div className="bio">
                  <div className="imgdiv pt-2">
                    <img
                      alt={card.alt}
                      src={card.imageSrc}
                      className="user-img"
                    />
                  </div>

                  <div className="namepos pt-2">
                    <p className="name">{card.name}</p>
                    <p className="position">{card.position}</p>
                  </div>
                </div>

                <p className="description">{card.description}</p>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
