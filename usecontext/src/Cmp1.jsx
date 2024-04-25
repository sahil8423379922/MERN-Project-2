import React, { useContext } from "react";
import Cmp2 from "./Cmp2";

export default function Cmp1({ context }) {
  const value = useContext(context);
  return (
    <div>
      <Cmp2 context={context} />
    </div>
  );
}
