import React, { Component } from "react";
import { AboutSection, InfoSection, TextContent } from "./about-style.js";
class About extends Component {
  render() {
    return (
      <AboutSection id="about">
        <div className="flex-grid">
          <div className="col">


              <i className="fas fa-user-circle" />
              <h5>About</h5>
              <p>
                I am a student at KYH where i study to become a Front-End
                Developer. In two years i hopefully will be a full-featured
                webbdeveloper, specialization in frontend
              </p>

          </div>
          <div className="col">
            {" "}

              <i className="fas fa-graduation-cap" />

              <h5>Education</h5>

              <ul className="icon-list">
              <li>
              <i className="fas fa-book large_icon" />
              <p> KYH - Front End Developer</p>
              </li>
              <li>
              <i className="fas fa-clock large_icon">
                2018 - Present
              </i>
              </li>
              </ul>

          </div>
          <div className="col">
          <i className="fas fa-code"></i>
          <h5> Skills </h5>

          <ul className="icon-list">
          <li>

          <i className="fab fa-html5">  HTML5 </i> </li>
          <li><i className="fab fa-css3-alt">CSS3</i> </li>
          <li><i class="fab fa-react">React</i></li>
          <li><i class="fab fa-node">NodeJS</i></li>
          </ul>


          </div>
        </div>
      </AboutSection>
    );
  }
}

export default About;
