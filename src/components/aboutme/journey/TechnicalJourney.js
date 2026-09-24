import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import StarIcon from "@mui/icons-material/Star";
import ComputerIcon from "@mui/icons-material/Computer";
import {
  DiHtml5,
  DiPython,
  DiReact,
  DiPhp,
  DiJava,
  DiCss3,
  DiJavascript1,
  DiMysql,
  DiNodejs,
} from "react-icons/di";
import Flip from "react-reveal/Flip";

function TechnicalJourney() {
  return (
    <div className="mt-5">
      <div className="mt-5">
        <Flip top cascade>
          <h1>Technical Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            C PROGRAMMING LANGUAGE
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            C++ PROGRAMMING LANGUAGE
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<DiJava />}
        >
          <h3 className="vertical-timeline-element-title">JAVA</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<DiPython />}
        >
          <h3 className="vertical-timeline-element-title">PYTHON</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<DiHtml5 />}
        >
          <h3 className="vertical-timeline-element-title">HTML</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<DiCss3 />}
        >
          <h3 className="vertical-timeline-element-title">CSS</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<DiJavascript1 />}
        >
          <h3 className="vertical-timeline-element-title">JAVASCRIPT</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<DiPhp />}
        >
          <h3 className="vertical-timeline-element-title">PHP</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<DiMysql />}
        >
          <h3 className="vertical-timeline-element-title">MySQL</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<DiNodejs />}
        >
          <h3 className="vertical-timeline-element-title">NODE JS</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#38bdf8" }}
          icon={<DiReact />}
        >
          <h3 className="vertical-timeline-element-title">REACT</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#38bdf8", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default TechnicalJourney;
