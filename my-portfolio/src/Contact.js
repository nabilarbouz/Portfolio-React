import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contact() {
  return (
    <Container>
      <h2>Contact</h2>
      <Form>
        <Form.Row>
          <Col sm={4}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
              <Form.Text className="text-muted">
                I'll never share your info with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col sm={8}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
          </Col>
        </Form.Row>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
}
