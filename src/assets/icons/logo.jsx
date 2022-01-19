import React from "react";
import { animateScroll as scroll } from "react-scroll";

const Logo = () => {
  return (

    <text xmlns="http://www.w3.org/2000/svg" id="_t_" data-name="{t}" transform="translate(183 82)"
      style={{
        fontSize: "32px",
        color: '#17dd7d',
        fontFamily: 'JetBrains Mono',
        fonWeight: '500',
        opacity: '0.98',
        fontWeight: 'bolder',
        cursor: "pointer",
      }}
      onClick={() => scroll.scrollToTop()} >

      <tspan x="-46.8" y="0">&#123;</tspan><tspan y="0" fontWeight="800">t</tspan><tspan y="0">&#125;</tspan>
    </text>
  );
};

export default Logo;
