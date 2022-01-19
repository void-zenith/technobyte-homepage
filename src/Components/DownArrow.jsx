import React from "react";
import { HiArrowNarrowDown } from 'react-icons/hi';
import { useScrollBy } from 'react-use-window-scroll';

const DownArrow = () => {

  const scrollBy = useScrollBy();
  return <div>
    <HiArrowNarrowDown style={{
      background: "#353535",
      color: "#17dd7d",
      height: "53px",
      width: "53px",
      borderRadius: "50%",
      padding: "15",
      position: "fixed",
      bottom: "45px",
      right: "75px",
      cursor: "pointer",
      fontSize: '22px !important',
      zIndex: 1000,

    }}
      onClick={() => scrollBy({ top: 600, left: 0, behavior: "smooth" })}
    />


  </div>;
};

export default DownArrow;



