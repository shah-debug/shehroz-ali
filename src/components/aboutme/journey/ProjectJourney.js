import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import StarIcon from "@mui/icons-material/Star";
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import CodeIcon from '@mui/icons-material/Code';
import Flip from "react-reveal/Flip";

function ProjectJourney() {
  return (
    <div className="mt-5">
      <div className="mt-5">
        <Flip top cascade>
          <h1>Project Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Shoppy Ecommerce Website
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Amazing Meal System
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Academia Learning Website
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Personal Portfolio
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<CssIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Online Payroll management System
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<HtmlIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            New Year CountDown
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Heart Disease Prediction
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<CssIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Dual Mode Calendar
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<CssIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Dual Mode Calculator
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<CssIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Digital Clock
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Age Calculator
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Student Information Management System
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#38bdf8", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ProjectJourney;
