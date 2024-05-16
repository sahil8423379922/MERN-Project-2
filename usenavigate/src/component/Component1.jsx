import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Component1() {
  const navigate = useNavigate();

  const data = "computer";

  const route = () => {
    navigate("/cmp2", { state: { message: data } });
  };

  return (
    <div>
      <center>
        <Button className="mt-4 px-5" onClick={route}>
          Click to Button
        </Button>
      </center>
    </div>
  );
}
