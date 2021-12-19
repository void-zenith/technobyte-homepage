import React from "react";
import { ArrowDown } from 'react-bootstrap-icons';
import { animateScroll as scroll, Link, scroller } from "react-scroll";

const scrollToNextSection = (myRef) => {
  console.log(myRef.current.offsetTop);
  // window.scrollTo({
  //   top: myRef.current.offsetTop,
  //   behavior: "smooth",
  // })

  scroller.scrollTo("#contact", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
  // links.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });


}

//const links = ["Home", "Services", "How_We_Work", "Our_Team", "FAQ", "Contact"];

//var element = document.getElementById("Home");

const DownArrow = ({ myRef }) => {
  return <div>

    {/* {links.map((link) => { */}
    {/* return ( */}
    <Link>

      <ArrowDown style={{
        background: "#515753",
        color: "#17dd7d",
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        padding: "5",
        position: "fixed",
        bottom: "45px",
        right: "75px",
        cursor: "pointer",
        zIndex: 1000,

      }} onClick={() => scrollToNextSection(myRef)} />
    </Link>
    {/* ) */}
    {/* })} */}

  </div>;
};

export default DownArrow;



