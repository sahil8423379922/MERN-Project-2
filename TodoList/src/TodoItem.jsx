import React from "react";
import Button from "react-bootstrap/Button";

export default function TodoItem(props) {
  return (
    <tr>
      <td>{props.i + 1}</td>
      <td>{props.v.name}</td>
      <td>{props.v.desc}</td>
      <td>
        <Button variant="outline-dark" className="me-2">
          Update
        </Button>
        <Button variant="outline-dark">Delete</Button>
      </td>
    </tr>
  );
}
