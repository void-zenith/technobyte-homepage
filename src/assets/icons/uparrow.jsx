import React from 'react'
import { animateScroll as scroll } from 'react-scroll';

const Top = () => {
    scroll.scrollToTop();
}

const UpArrow = () => (

    <div style={{ marginRight: "234px" }}>
        <svg
            style={{
                cursor: "pointer",
                position: 'absolute',
                marginTop: "-120px"

            }}
            onClick={Top}
            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="251" height="251" viewBox="0 0 251 251">
            <defs>
                <filter id="Rectangle_12" x="0" y="0" width="251" height="251" filterUnits="userSpaceOnUse">
                    <feOffset dy="9" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="33" result="blur" />
                    <feFlood floodOpacity="0.02" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g id="Group_94" data-name="Group 94" transform="translate(99 90)">
                <g transform="matrix(1, 0, 0, 1, -99, -90)" filter="url(#Rectangle_12)">
                    <rect id="Rectangle_12-2" data-name="Rectangle 12" width="53" height="53" rx="26.5" transform="translate(99 90)" fill="#363636" />
                </g>
                <path id="Icon_ionic-ios-arrow-round-down" data-name="Icon ionic-ios-arrow-round-down" d="M23.625,14.73a.859.859,0,0,1-1.209.007l-4-3.989v15.2a.854.854,0,0,1-1.709,0v-15.2l-4,4a.865.865,0,0,1-1.209-.007.851.851,0,0,1,.007-1.2l5.455-5.415h0a.959.959,0,0,1,.269-.177.815.815,0,0,1,.329-.066.857.857,0,0,1,.6.243l5.455,5.415A.837.837,0,0,1,23.625,14.73Z" transform="translate(8.47 8.852)" fill="#17dd7d" />
            </g>
        </svg>
    </div>
)

export default UpArrow
