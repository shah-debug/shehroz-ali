import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Journey from "../../components/aboutme/journey/Journey";
import Fade from "react-reveal/Fade";
import Certification from "../../components/certificate/Certification";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 120);

    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Muhammad Shehroz Ali</strong>
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <Tilt>
                  <Fade cascade>
                    <img
                      src="./profile.png"
                      alt="home pic"
                      className="img-fluid"
                    />
                  </Fade>
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
      <Journey />
      <Certification />
      <Projects />
      <Contactus />
    </section>
  );
}
