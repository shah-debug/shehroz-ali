import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import EducationJourney from "./EducationJourney";
import ExperienceJourney from "./ExperienceJourney";
import TechnicalJourney from "./TechnicalJourney";
import ProjectJourney from "./ProjectJourney";

const JOURNEY_TABS = [
  { id: "education", label: "Educational Journey" },
  { id: "experience", label: "Experience Journey" },
  { id: "technical", label: "Technical Journey" },
  { id: "project", label: "Project Journey" },
];

export default function Journey() {
  const [active, setActive] = useState("education");

  return (
    <Container fluid className="home-about-section" id="journey">
      <Container>
        <Row>
          <Col
            md={12}
            className="home-about-description d-flex justify-content-start"
          >
            <Zoom left cascade>
              <h1 className="aboutme-heading">Journey</h1>
            </Zoom>
          </Col>
          <Col md={12} className="mt-3">
            <div className="journey-nav">
              {JOURNEY_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`journey-tab ${active === tab.id ? "active" : ""}`}
                  onClick={() => setActive(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {active === "education" && <EducationJourney />}
            {active === "experience" && <ExperienceJourney />}
            {active === "technical" && <TechnicalJourney />}
            {active === "project" && <ProjectJourney />}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
