import React, { useContext } from "react";

export default function Cmp2({ context }) {
  const value = useContext(context);
  return <div>{value}</div>;
}
