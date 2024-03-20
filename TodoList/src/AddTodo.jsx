import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/esm/Table";
import Button from "react-bootstrap/esm/Button";

export default function AddTodo() {
  const [title, settitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div>
      <h2
        className="pt-4 pb-2"
        style={{ fontSize: 30, fontWeight: "bold", fontFamily: "Georgia" }}
      >
        Add Todo
      </h2>
      <Form>
        <Table>
          <Row>
            <Col xs={3}>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                onChange={(event) => {
                  settitle(event.target.value);
                }}
              />
            </Col>
            <Col xs={6}>
              <Form.Control
                type="text"
                onChange={(event) => {
                  setDesc(event.target.value);
                }}
                placeholder="Enter Desc"
              />
            </Col>
            <Col xs={3}>
              <Button
                variant="outline-success"
                style={{
                  paddingLeft: 30,
                  paddingRight: 30,
                }}
              >
                Success
              </Button>{" "}
            </Col>
          </Row>
          <p>{title}</p>
          <p>{desc}</p>
        </Table>
      </Form>
    </div>
  );
}
