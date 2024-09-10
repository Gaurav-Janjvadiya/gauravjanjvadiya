import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutMe = () => {
  return (
    <Container className="my-5 py-3">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center mb-4">
            <Card.Body>
              <Card.Title>Gaurav</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Full Stack Web Developer
              </Card.Subtitle>
              <Card.Text>
                Passionate about building dynamic and responsive web
                applications using the MERN stack and other modern technologies.
              </Card.Text>
            </Card.Body>
          </Card>
          <h2>About Me</h2>
          <p>
            I started coding during my 12th vacation and have since developed a
            strong background in the MERN stack. I am currently pursuing a
            Bachelor of Computer Applications (BCA) at Junagadh Gurukul. My
            journey in web development began with a fascination for how web
            technologies work and has evolved into a deep passion for creating
            engaging and user-friendly applications.
          </p>

          <h3>Skills & Expertise</h3>
          <ListGroup>
            <ListGroup.Item>
              MERN Stack (MongoDB, Express, React, Node.js)
            </ListGroup.Item>
            <ListGroup.Item>
              Front-end Development (HTML, CSS, JavaScript)
            </ListGroup.Item>
            <ListGroup.Item>
              Back-end Development (API creation, Authentication)
            </ListGroup.Item>
            <ListGroup.Item>Version Control (Git, GitHub)</ListGroup.Item>
            <ListGroup.Item>
              Responsive Design (Bootstrap, Media Queries)
            </ListGroup.Item>
          </ListGroup>

          <h3>Projects</h3>
          <ul>
            <li>
              <strong>Wanderlust</strong> - A platform for travelers to find and
              share travel experiences. Developed using the MERN stack with
              features such as user authentication and dynamic listings.
              <br />
              <a
                href="https://wanderlust-0vqa.onrender.com/listings"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </li>
            <li>
              <strong>Quick Todo</strong> - A task management application that
              allows users to create, update, and delete tasks. Built with React
              for the front-end and Node.js for the back-end.
              <br />
              <a
                href="https://quicktodobygaurav.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </li>
            <li>
              <strong>Image Gallery</strong> - A simple gallery application to
              showcase and manage images. Utilizes React for the user interface
              and integrates with a backend API.
              <br />
              <a
                href="https://main--image-gallary-by-gaurav.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </li>
          </ul>

          <h3>Education</h3>
          <ul>
            <li>
              Bachelor's Degree in Computer Applications (BCA) - Junagadh
              Gurukul
            </li>
          </ul>

          <h3>Personal Interests</h3>
          <p>
            Outside of coding, I enjoy tracking, cycling, exercising,
            photography, and exploring new technologies. I’m always on the
            lookout for new challenges and opportunities to learn and grow.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
