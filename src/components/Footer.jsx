// Footer.jsx
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap"; // Bootstrap is available globally
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-light text-dark py-4 border-top border-dark-subtle"
      style={{ backgroundColor: "#dcdcdc" }}
    >
      <Container>
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <Nav className="justify-content-center justify-content-md-start">
              <Nav.Link as={Link} to="/" className="text-dark">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about-me" className="text-dark">
                About Me
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-dark">
                Contact
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="mb-3">
              <a
                href="https://facebook.com"
                className="text-dark mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com"
                className="text-dark mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-dark mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <p className="mb-0">
              <FontAwesomeIcon icon={faCopyright} /> {currentYear} Gaurav Janjvadiya
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
