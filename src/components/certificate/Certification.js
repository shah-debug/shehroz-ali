import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { HiArrowRight } from "react-icons/hi";

export default function Certification() {
  const certifications = [
    {
      id: 1,
      title: "Data Analysis with Python",
      provider: "Coursera",
      category: "Data Science",
      description:
        "Certification focused on data analysis using Python, including data processing, analysis, visualization, and practical data science concepts.",
      color: "#39c4ff",
      shortName: "PY",
      certificateUrl: "",
    },

    {
      id: 2,
      title: "How to Write Research Paper",
      provider: "Coursera",
      category: "Academic Research",
      description:
        "Training focused on research paper writing, academic structure, scientific communication, and preparation of research manuscripts.",
      color: "#54faae",
      shortName: "RP",
      certificateUrl: "",
    },

    {
      id: 3,
      title: "Python for Everybody",
      provider: "Coursera",
      category: "Programming",
      description:
        "Python programming certification covering programming fundamentals, data handling, problem solving, and practical Python development.",
      color: "#f1f965",
      shortName: "PY",
      certificateUrl: "",
    },

    {
      id: 4,
      title: "Web Development and Designing",
      provider: "UI/UX",
      category: "Web Development",
      description:
        "Certification covering web development fundamentals, interface design, user experience, and modern web design principles.",
      color: "#ff8c2f",
      shortName: "UI",
      certificateUrl: "",
    },
  ];

  return (
    <div>
      <Container
        fluid
        className="certificate-section"
        id="certifications"
      >
        <Container>

          {/* Heading */}
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <div>
                  <h1 className="aboutme-heading">
                    Certifications
                  </h1>

                  <p className="certification-intro">
                    Professional certifications and training supporting my
                    academic research, programming, data analysis, and
                    technical development.
                  </p>
                </div>
              </Zoom>
            </Col>
          </Row>

          {/* Certification Cards */}
          <Row className="g-4 mt-2">
            {certifications.map((certificate) => (
              <Col lg={6} md={6} sm={12} key={certificate.id}>
                <Fade bottom duration={1200} distance="25px">

                  <div
                    className="modern-cert-card"
                    style={{
                      "--cert-color": certificate.color,
                    }}
                  >

                    {/* Card Header */}
                    <div className="cert-modern-header">

                      <div
                        className="cert-letter"
                        style={{
                          color: certificate.color,
                          borderColor: certificate.color,
                        }}
                      >
                        {certificate.shortName}
                      </div>

                      <div className="cert-category">
                        {certificate.category}
                      </div>

                    </div>

                    {/* Content */}
                    <div className="cert-modern-body">

                      <h2>
                        {certificate.title}
                      </h2>

                      <h4>
                        {certificate.provider}
                      </h4>

                      <p>
                        {certificate.description}
                      </p>

                    </div>

                    {/* Footer */}
                    <div className="cert-modern-footer">

                      <span>
                        Professional Certification
                      </span>

                      {certificate.certificateUrl ? (
                        <a
                          href={certificate.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="certificate-view-btn"
                        >
                          View Certificate
                          <HiArrowRight />
                        </a>
                      ) : (
                        <span className="certificate-status">
                          Certificate
                        </span>
                      )}

                    </div>

                  </div>

                </Fade>
              </Col>
            ))}
          </Row>

     

        </Container>
      </Container>
    </div>
  );
}
