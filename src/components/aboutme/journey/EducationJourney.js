import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function EducationJourney() {
  return (
    <div className="mt-5">
      <div>
        <Flip top cascade>
          <h1>Educational Journey</h1>
        </Flip>
      </div>

      <VerticalTimeline>

        {/* MPhil */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "rgb(78 22 112)",
            color: "#38bdf8",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(78 22 112)",
          }}
          date="01/2024 – 04/2026"
          iconStyle={{
            background: "rgb(78 22 112)",
            color: "#38bdf8",
          }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            MPHIL IN COMPUTER SCIENCE
          </h4>

          <h4 className="vertical-timeline-element-subtitle mt-2">
            Govt College University
          </h4>

          <p>
            Faisalabad, Pakistan
          </p>

          <p>
            Pursued an MPhil in Computer Science with a research focus on
            Artificial Intelligence, Multimodal Large Language Models,
            Medical Image Analysis, and Machine Learning.
          </p>

          <p>
            <strong>MS Thesis:</strong>{" "}
            Improving Glaucoma Diagnosis Using Multimodal Large Language Model
          </p>
        </VerticalTimelineElement>

        {/* Bachelor */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "rgb(78 22 112)",
            color: "#38bdf8",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(78 22 112)",
          }}
          date="11/2019 – 11/2023"
          iconStyle={{
            background: "rgb(78 22 112)",
            color: "#38bdf8",
          }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            BACHELOR IN COMPUTER SCIENCE
          </h4>

          <h4 className="vertical-timeline-element-subtitle mt-2">
            Govt Islamia Degree College
          </h4>

          <p>
            Faisalabad, Pakistan
          </p>

          <p>
            Completed a Bachelor's degree in Computer Science with a foundation
            in programming, software development, databases, and computer
            science fundamentals.
          </p>
        </VerticalTimelineElement>

        {/* Thesis / Research */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "rgb(78 22 112)",
            color: "#38bdf8",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(78 22 112)",
          }}
          date="2024 – 2026"
          iconStyle={{
            background: "rgb(78 22 112)",
            color: "#38bdf8",
          }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            MPhil RESEARCH
          </h4>

          <h4 className="vertical-timeline-element-subtitle mt-2">
            Glaucoma Diagnosis Using Multimodal AI
          </h4>

          <p>
            Research focused on improving glaucoma diagnosis using multimodal
            large language models, medical image analysis, few-shot learning,
            and AI-based diagnostic approaches.
          </p>
        </VerticalTimelineElement>

        {/* End */}
        <VerticalTimelineElement
          iconStyle={{
            background: "#38bdf8",
            color: "rgb(78 22 112)",
          }}
          icon={<StarIcon />}
        />

      </VerticalTimeline>
    </div>
  );
}

export default EducationJourney;
