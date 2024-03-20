import React from "react";
import Button from "react-bootstrap/Button";

export default function TodoItem({ i, v }) {
  return (
    <tr>
      <td>{i + 1}</td>
      <td>{v.name}</td>
      <td>{v.desc}</td>
      <td>
        <Button variant="outline-dark" className="me-2">
          Update
        </Button>
        <Button variant="outline-dark">Delete</Button>
      </td>
    </tr>
  );
}
