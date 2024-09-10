import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} className="mx-auto">
          <h2 className="text-center mb-4">Contact Me</h2>
          {success && <Alert variant="success">Your message has been sent successfully!</Alert>}
          {error && <Alert variant="danger">There was an error sending your message. Please try again.</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
