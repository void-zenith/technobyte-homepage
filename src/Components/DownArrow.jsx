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


    {/* <svg
      style={{
        cursor: "pointer",
        position: "fixed",
        bottom: "5px",
        right: "25px",
        cursor: "pointer",
        zIndex: 1000,

      }}
      onClick={() => scrollBy({ top: 600, left: 0, behavior: "smooth" })}

      xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="251" height="251" viewBox="0 0 251 251">
      <defs>
        <filter id="Rectangle_12" x="0" y="0" width="251" height="251" filterUnits="userSpaceOnUse">
          <feOffset dy="9" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="33" result="blur" />
          <feFlood flood-opacity="0.02" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Group_94" data-name="Group 94" transform="translate(99 90)">
        <g transform="matrix(1, 0, 0, 1, -99, -90)" filter="url(#Rectangle_12)">
          <rect id="Rectangle_12-2" data-name="Rectangle 12" width="53" height="53" rx="26.5" transform="translate(99 90)" fill="#363636" />
        </g>
        <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" transform="translate(16.47 16.852)" fill="#17dd7d" />
      </g>
    </svg> */}

  </div>;
};

export default DownArrow;



