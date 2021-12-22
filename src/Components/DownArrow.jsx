import React from "react";
import { ArrowDown } from 'react-bootstrap-icons';
import { useScrollBy } from 'react-use-window-scroll';

const DownArrow = () => {

  const scrollBy = useScrollBy();
  return <div>
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

    }}
      onClick={() => scrollBy({ top: 600, left: 0, behavior: "smooth" })}
    />
  </div>;
};

export default DownArrow;



