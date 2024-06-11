import React from "react";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const { state } = location;

  return <div>{state.message}</div>;
}
