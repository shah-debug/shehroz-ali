import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";

const skills = [
  {
    name: "Python",
    percentage: 90,
    color: "#39c4ff",
    id: "python",
  },
  {
    name: "PyTorch",
    percentage: 85,
    color: "#fe3e57",
    id: "pytorch",
  },
  {
    name: "TensorFlow",
    percentage: 80,
    color: "#ff8c2f",
    id: "tensorflow",
  },
  {
    name: "Deep Learning",
    percentage: 88,
    color: "#54faae",
    id: "deep-learning",
  },
  {
    name: "Medical Image Analysis",
    percentage: 85,
    color: "#f1f965",
    id: "medical-ai",
  },
  {
    name: "Multimodal AI / LLMs",
    percentage: 82,
    color: "#41f2ff",
    id: "multimodal-ai",
  },
  {
    name: "Hugging Face",
    percentage: 82,
    color: "#ff0173",
    id: "hugging-face",
  },
  {
    name: "Computer Vision",
    percentage: 85,
    color: "#fe3e57",
    id: "computer-vision",
  },
  {
    name: "Federated Learning",
    percentage: 78,
    color: "#54faae",
    id: "federated-learning",
  },
  {
    name: "Differential Privacy",
    percentage: 75,
    color: "#39c4ff",
    id: "differential-privacy",
  },
  {
    name: "Vision Transformers",
    percentage: 78,
    color: "#f1f965",
    id: "vision-transformers",
  },
  {
    name: "LaTeX / Overleaf",
    percentage: 88,
    color: "#ff8c2f",
    id: "latex",
  },
];

export default function TechnicalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>

        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>

        <Link className="btn btn-primary" to="/toolkit">
          Toolkit
        </Link>
      </div>

      <Tada>
        <h1 className="mt-4">Technical Skills</h1>
      </Tada>

      <div className="mt-5">
        <Container>
          <Row className="g-5">
            {skills.map((skill) => (
              <Col md={4} key={skill.name}>
                <h1
                  style={{
                    fontSize: "70px",
                    color: skill.color,
                    fontWeight: 700,
                  }}
                >
                  {skill.percentage}%
                </h1>

                <div
                  style={{
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                >
                  <div className="progress">
                    <div
                      role="progressbar"
                      id={skill.id}
                      aria-valuenow={skill.percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: `${skill.percentage}%`,
                      }}
                    ></div>
                  </div>

                  <h2
                    style={{
                      color: skill.color,
                      fontSize: "22px",
                      marginTop: "13px",
                      fontWeight: 700,
                    }}
                  >
                    {skill.name}
                  </h2>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
