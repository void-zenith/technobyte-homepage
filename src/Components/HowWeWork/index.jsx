import React, { useRef } from 'react'


const HowWeWork = () => {
    const myRef = useRef();
    return (
        <div ref={myRef} id="How_We_Work" className="mainbody-container">

            <div className="mainbody-container__left">
                <div className="left-container__content">
                    <div className="technobyte">How We Work</div>
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
    )
}

export default HowWeWork
