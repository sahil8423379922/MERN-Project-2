import React from "react";
import CardComponent from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

export default function App() {
  const movie = [
    {
      name: "Iron Man 3",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt quos",
      link: "https://filmartgallery.com/cdn/shop/products/Iron-Man-Vintage-Movie-Poster-Original-1-Sheet-27x41_e2bcb66a-ccd4-40b9-8726-d58b195d2085.jpg",
    },
    {
      name: "Iron Man 3",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt quos",
      link: "https://filmartgallery.com/cdn/shop/products/Iron-Man-Vintage-Movie-Poster-Original-1-Sheet-27x41_e2bcb66a-ccd4-40b9-8726-d58b195d2085.jpg",
    },
    {
      name: "Iron Man 3",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt quos",
      link: "https://filmartgallery.com/cdn/shop/products/Iron-Man-Vintage-Movie-Poster-Original-1-Sheet-27x41_e2bcb66a-ccd4-40b9-8726-d58b195d2085.jpg",
    },
    {
      name: "Iron Man 3",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt quos",
      link: "https://filmartgallery.com/cdn/shop/products/Iron-Man-Vintage-Movie-Poster-Original-1-Sheet-27x41_e2bcb66a-ccd4-40b9-8726-d58b195d2085.jpg",
    },
  ];
  return (
    <div>
      <Container>
        <Row>
          {movie.map((value) => {
            return (
              <Col>
                <CardComponent v={value} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
