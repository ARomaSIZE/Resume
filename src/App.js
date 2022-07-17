import React from "react";

import Rating from "@mui/material/Rating";
import imgpro from "./img/imgProfile.jfif";
import "./App.css";

//import ICON
import StarIcon from "@mui/icons-material/Star";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function App() {
  return (
    <div className="body-app">
      <div className="nav-resume">
        <div className="Logo">
          <img src={imgpro} />
        </div>

        <div className="detile-nav">
          <h3>Personal details</h3>
          <div className="line-buttom"></div>

          <div className="email">
            <EmailIcon className="icon" />
            <h4>6231302012@lamduan.mfu.ac.th</h4>
          </div>
          <div className="phone">
            <LocalPhoneIcon className="icon" />
            <h4>0640456722</h4>
          </div>

          <div className="address">
            <HomeIcon className="icon" />
            <h4>33/2 14 Sukhothai Thungsaliam 64150</h4>
          </div>

          <div className="birthday">
            <CalendarMonthIcon className="icon" />
            <h4>July 15th, 2000</h4>
          </div>

          <div className="skill">
            <h3>Skills</h3>
            <div className="line-buttom"></div>

            <div className="skill-details">
              <dvi className="js-rt">
                <h4>JavaScript</h4>
                <Rating
                  className="rt"
                  name="text-feedback"
                  value={3}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </dvi>

              <div className="html-rt">
                <h4>HTML</h4>
                <Rating
                  className="rt"
                  name="text-feedback"
                  value={4}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </div>

              <div className="css-rt">
                <h4>CSS AND SASS</h4>
                <Rating
                  className="rt"
                  name="text-feedback"
                  value={3.5}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </div>

              <div className="node-rt">
                <h4>Nodejs</h4>
                <Rating
                  className="rt"
                  name="text-feedback"
                  value={3}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </div>

              <div className="react-rt">
                <h4>React</h4>
                <Rating
                  className="rt"
                  name="text-feedback"
                  value={3}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </div>
            </div>
          </div>

          <div className="languages">
            <h3>Languages</h3>
            <div className="line-buttom"></div>

            <div className="languages-details">
              <div className="eng-rt">
                <h4>English</h4>
                <Rating
                  className="rt"
                  name="text-feedback"
                  value={3}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </div>

              <div className="th-rt">
                <h4>Thai</h4>
                <Rating
                  className="rt"
                  name="text-feedback"
                  value={5}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="body-main">
        <div className="main">
          <h1 className="name">Phronwanat Boonman (Mate)</h1>

          <h3 className="eduction">Education</h3>
          <div className="line-buttom"></div>
          <div className="school-edcation1">
            <h5>High School</h5>

            <div className="date-school">
              <h5>May 2016 - Mar 2019</h5>
            </div>
          </div>

          <div className="school-detial-edcation1">
            <div className="name-school">
              <h6>Thungsaliamchanupatham School, Sukhothai</h6>
            </div>

            <div className="gpax">
              <h6>GPAX 2.94</h6>
            </div>

            <div className="activity">
              <h5>Activity History</h5>

              <div className="activity-details">
                <h6>
                  -Participated in robot sumo competition 2016 at Naresuan
                  University
                </h6>
                <h6>
                  -Participated in the Autonomous robot competition 2016-2018
                </h6>
              </div>
            </div>
          </div>

          <div className="school-edcation2">
            <h5>Undergraduate</h5>
            <div className="date-school">
              <h5>Aug 2019 - Present</h5>
            </div>
          </div>

          <div className="name-school">
            <h6>Mae Fha Luang University, ChaingRai</h6>
          </div>
          <div className="gpax">
            <h6>GPAX 3.18</h6>
          </div>

          <div className="work-experience">
            <h3>Working Experience</h3>
          </div>
          <div className="line-buttom"></div>

          <div className="work-details">
            <div className="work-1">
              <div className="title-work">
                <h5>Equipment Disbursement System</h5>
              </div>

              <div className="details-work">
                <h6>- UX-UI design</h6>
                <h6>- Front-end developer</h6>

                <div className="tach-use">
                  <h5>Technology Used</h5>
                </div>

                <div className="teac-details">
                  <h6>- HTML</h6>
                  <h6>- Boostrap5</h6>
                  <h6>- NodeJs</h6>
                </div>
              </div>
            </div>

            <div className="work-2">
              <div className="title-work">
                <h5>Human Resource Management System</h5>
              </div>

              <div className="details-work">
                <h6>- UX-UI design</h6>
                <h6>- Front-end developer</h6>

                <div className="tach-use">
                  <h5>Technology Used</h5>
                </div>

                <div className="teac-details">
                  <h6>- React</h6>
                  <h6>- Material Ui and Css</h6>
                  <h6>- NodeJs</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="project-class">
            <h3>Project during class</h3>
          </div>
          <div className="line-buttom"></div>

          <div className="project">
            <div project-title>
              <h5>PaletteArtz App</h5>
            </div>

            <div className="tach-use">
              <h5>Technology Used</h5>
            </div>

            <div className="project-deails">
              <h6>-Flutter</h6>
              <h6>-NodeJs</h6>
            </div>
          </div>

          <div className="project">
            <div project-title>
              <h5>IOT Device and System For Fall Risk Assessment</h5>
            </div>

            <div className="tach-use">
              <h5>Technology Used</h5>
            </div>

            <div className="project-deails">
              <h6>Software</h6>
              <h6>-Arduino IDE 1.8.19</h6>
              <h6>Hardware</h6>
              <h6>-Esp 8266</h6>
              <h6>-FSR 402 FOrce sensor</h6>
              <h6>-TF-Luna LiDAR Module and so on</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
