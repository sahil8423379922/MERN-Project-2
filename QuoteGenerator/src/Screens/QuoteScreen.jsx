import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export default function QuoteScreen() {
  const arr = [
    "The only way to do great work is to love what you do.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The best way to predict the future is to invent it.",
    "Believe you can and you're halfway there.",
  ];

  const [quote, setquote] = useState(
    '"The only way to do great work is to love what you do."'
  );

  const renderquote = () => {
    const randomindex = Math.floor(Math.random() * arr.length);
    setquote(arr[randomindex]);
    console.log(randomindex);
  };
  return (
    <>
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
            <h3 style={{ fontSize: "35px", fontWeight: "600" }}>{quote}</h3>

            <Row className="mt-5">
              <Col>
                <Button onClick={renderquote}>New Quote</Button>
              </Col>
            </Row>
          </center>
        </Card>
      </div>
    </>
  );
}
