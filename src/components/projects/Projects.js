import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";

import {
  FaBrain,
  FaShieldAlt,
  FaMobileAlt,
  FaCode,
  FaGithub,
} from "react-icons/fa";


export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Glaucoma Diagnosis using Multimodal LLM",
      category: "AI Research • Medical Imaging",
      icon: <FaBrain />,
      description:
        "MS/MPhil research project focused on improving glaucoma diagnosis by combining retinal fundus image analysis with multimodal large language models, few-shot learning, and retrieval-augmented generation.",
      technologies:
        "Multimodal LLMs • Medical Image Analysis • Few-Shot Learning • RAG",
      color: "#b061df",
      github: "#",
    },

    {
      id: 2,
      title: "Lightweight Glaucoma Classification Model",
      category: "Deep Learning • Computer Vision",
      icon: <FaBrain />,
      description:
        "A lightweight deep learning model developed for glaucoma classification from retinal fundus images, designed with an emphasis on efficient medical image analysis and practical deployment.",
      technologies:
        "Python • PyTorch • Computer Vision • Medical Imaging • Hugging Face",
      color: "#39c4ff",
      github: "#",
    },

    {
      id: 3,
      title: "Federated Learning with Differential Privacy",
      category: "Privacy-Preserving AI",
      icon: <FaShieldAlt />,
      description:
        "Research work exploring privacy-preserving machine learning using federated learning and differential privacy, including investigation of defense mechanisms against gradient inversion attacks.",
      technologies:
        "Federated Learning • Differential Privacy • Swin Transformer • PyTorch",
      color: "#54faae",
      github: "#",
    },

    {
      id: 4,
      title: "Flutter Mobile Application",
      category: "Mobile Application Development",
      icon: <FaMobileAlt />,
      description:
        "A mobile application developed using Flutter and Dart, demonstrating practical experience in cross-platform application development and user-focused software design.",
      technologies:
        "Flutter • Dart • Mobile Development • UI/UX",
      color: "#ff8c2f",
      github: "#",
    },
  ];

  return (
    <div>
      <Container fluid className="project-section" id="projects">
        <Container>

          {/* Heading */}
          <Row>
            <Col md={12} className="project-heading">
              <Zoom left cascade>
                <h3 className="aboutme-heading">
                  Featured Projects
                </h3>
              </Zoom>

              <p
                style={{
                  color: "#c9c9c9",
                  fontSize: "16px",
                  marginTop: "10px",
                  marginBottom: "40px",
                }}
              >
                Research, artificial intelligence, and software development
                projects focused on solving real-world problems.
              </p>
            </Col>
          </Row>

          {/* Projects */}
          <Row className="g-4">
            {projects.map((project) => (
              <Col lg={6} md={6} sm={12} key={project.id}>
                <Fade bottom>
                  <div
                    className="modern-project-card"
                    style={{
                      "--project-color": project.color,
                    }}
                  >

                    {/* Top Section */}
                    <div className="project-card-top">

                      <div
                        className="project-icon"
                        style={{
                          color: project.color,
                          borderColor: project.color,
                        }}
                      >
                        {project.icon}
                      </div>

                      <div className="project-category">
                        {project.category}
                      </div>

                    </div>

                    {/* Content */}
                    <div className="project-card-content">

                      <h3>
                        {project.title}
                      </h3>

                      <p>
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="project-tech">
                        {project.technologies}
                      </div>

                    </div>

                    {/* Footer */}
                    <div className="project-card-footer">

                      <span className="project-type">
                        <FaCode />
                        Research / Development
                      </span>

                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-github"
                        >
                          <FaGithub />
                        </a>
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
