import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardComponent() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://filmartgallery.com/cdn/shop/products/Iron-Man-Vintage-Movie-Poster-Original-1-Sheet-27x41_e2bcb66a-ccd4-40b9-8726-d58b195d2085.jpg"
        />
        <Card.Body>
          <Card.Title>Iron Man 2</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quos
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
