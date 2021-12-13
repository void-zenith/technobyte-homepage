import React from "react";
import Code from "../../assets/image/code";
import Partilce from "./particle";
import { ArrowRight } from 'react-bootstrap-icons';
import DownArrow from "../DownArrow";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-scroll";
const Mainbody = () => {
  return (
    <div id="home" className="mainbody-container">
      <div className="mainbody-container__left">
        <div className="left-container__content">
          <div className="technobyte">Technobyte Nepal</div>
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
          <div className="letsworktogether">
            <Link to="how_we_work" smooth={true} duration={1000}>Let's work together</Link>

            <ArrowRight style={{ marginLeft: "6px", fontSize: "20" }} />

          </div>
        </div>

      </div>
      <div className="mainbody-container__right">
        <Code></Code>
      </div>
      <DownArrow></DownArrow>
    </div>
  );
};

export default Mainbody;
