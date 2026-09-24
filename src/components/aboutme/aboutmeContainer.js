import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function AboutmeContainer() {
  const location = useLocation();
  const path = location.pathname;

  const activeKey =
    path.includes("technicalskill") ||
    path.includes("personalskill") ||
    path.includes("toolkit")
      ? "skills"
      : path.includes("socialmedia")
      ? "social"
      : "about";

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col
            md={12}
            className="home-about-description d-flex justify-content-start"
          >
            <Zoom left cascade>
              <h1 className="aboutme-heading">About me</h1>
            </Zoom>
          </Col>
          <Col md={12} className="mt-3 d-flex flex-column">
            <Nav justify variant="tabs" activeKey={activeKey} className="about-tabs">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  eventKey="about"
                  style={{ fontSize: "17px", fontWeight: 700 }}
                >
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="technicalskill"
                  eventKey="skills"
                  style={{ fontSize: "17px", fontWeight: 700 }}
                >
                  Skills
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="socialmedia"
                  eventKey="social"
                  style={{ fontSize: "17px", fontWeight: 700 }}
                >
                  Social Media
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <div>
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
