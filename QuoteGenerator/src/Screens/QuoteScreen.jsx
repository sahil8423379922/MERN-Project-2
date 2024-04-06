import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import styles from "./CSS/Quote.module.css";

export default function QuoteScreen(props) {
  return (
    <div
      style={{
        backgroundColor: "#fff8d4",
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "35rem", padding: "20px" }}>
        <center>
          <h3 style={{ fontSize: "35px", fontWeight: "400" }}>{props.quote}</h3>
          <div
            style={{
              textAlign: "right",
              paddingRight: "20px",
              fontSize: "20px",
              paddingTop: "10px",
            }}
          >
            -{props.author}
          </div>

          <Row className="mt-5">
            <Col>
              <Button onClick={props.rq}>New Quote</Button>
            </Col>
          </Row>
        </center>
      </Card>
    </div>
  );
}
