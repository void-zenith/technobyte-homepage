import React, { useRef } from "react";

const OurTeam = () => {
  const myRef = useRef();
  return (
    <div ref={myRef} id="Our_Team" className="mainbody-container">
      <div className="mainbody-container">
        <div className="container__content">
          <div className="technobyte">Our Team</div>
          <div className="catchphrase">
            <h1>
              We build softwares for{" "}
              <span className="catchphrase-for">startups</span> &{" "}
              <span className="catchphrase-for">Businesses.</span>
            </h1>
          </div>
          <div className="messaage">
            Leveraging our design, web, and mobile development team, we help
            business build end to end digital products.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
