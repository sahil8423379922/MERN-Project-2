import React, { useEffect } from "react";

export default function App() {
  const callApi = () => {
    fetch("http://localhost:8000/api/data", {
      method: "get",
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
      })
    );
  };

  return (
    <div>
      <button type="button" onClick={callApi}>
        Calling Backend
      </button>
    </div>
  );
}
