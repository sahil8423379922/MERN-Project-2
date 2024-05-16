import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

export default function Component2() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const route = () => {
    navigate("/cmp3");
  };

  return (
    <div>
      <div>
        <center>
          <Button className="mt-4 px-5" onClick={route}>
            Click to Button
          </Button>
          <h1>{state.message}</h1>
        </center>
      </div>
    </div>
  );
}
