import React from "react";
import CardComponent from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <CardComponent />
          </Col>
          <Col>
            <CardComponent />
          </Col>
          <Col>
            <CardComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
