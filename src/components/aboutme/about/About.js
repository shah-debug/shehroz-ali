import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is{" "}
                <b className="purple">Muhammad Shehroz Ali</b>, and I am a{" "}
                <b className="purple">
                  Computer Science researcher and MS/MPhil candidate
                </b>{" "}
                at{" "}
                <b className="purple">
                  Government College University Faisalabad, Pakistan
                </b>
                .
                <br />
                <br />

                My research focuses on{" "}
                <b className="purple">
                  Multimodal AI, Medical Image Analysis, and
                  Privacy-Preserving Machine Learning
                </b>
                . My current research explores{" "}
                <b className="purple">
                  glaucoma diagnosis using multimodal large language models,
                  few-shot learning, and retrieval-augmented generation
                </b>
                .
                <br />
                <br />

                I also have research experience in{" "}
                <b className="purple">
                  Federated Learning, Differential Privacy, Vision
                  Transformers, and Remote Sensing Image Classification
                </b>
                , with a particular interest in developing efficient and
                privacy-aware AI systems.
                <br />
                <br />

                Alongside my research, I work with{" "}
                <b className="purple">
                  Python, PyTorch, TensorFlow, Hugging Face, Dart/Flutter,
                  LaTeX, and Google Colab
                </b>
                . I have also developed and released a{" "}
                <b className="purple">
                  lightweight glaucoma classification model on Hugging Face
                </b>{" "}
                and am actively interested in{" "}
                <b className="purple">
                  research collaborations and fully funded PhD opportunities
                </b>{" "}
                in Computer Science and Artificial Intelligence.
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
