import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by M. Shehroz Ali</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} M. Shehroz Ali</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/shehrozalig98-cyber"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/muhammadshehrozali/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <button
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </button>
            </li>
            <li className="social-icons">
              <button
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </button>
            </li>
            <li className="social-icons">
              <button
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <FaGoogle />
              </button>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
