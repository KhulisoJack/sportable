import React, { useState } from 'react';
import Footer from './footer';
import { Button, Form, Col, Row, InputGroup } from 'react-bootstrap';

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div>
      <div className="container">
        <h1>CONTACT US</h1>
        <p>Let us know which aspect of Sportable you’d like to talk about, and we’ll be in touch.</p>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="ValidationFirstName">
            <Form.Control required type="text" placeholder="First Name" />
            <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="ValidationLastName">
            <Form.Control required type="text" placeholder="Last Name" />
            <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="ValidationCity">
            <Form.Control type="text" placeholder="Organisation" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="e-email address" />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" placeholder="Phone Number" />
      </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
        </Row>
        <Button variant="dark">Submit</Button>
      </Form>
      <Footer />
    </div>
  );
}

export default Contact;
