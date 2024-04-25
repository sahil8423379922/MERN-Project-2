import React, { createContext, useState } from "react";
import Cmp1 from "./Cmp1";

const UserContext = createContext();

export default function App() {
  const [name, setname] = useState("Sahil");
  return (
    <UserContext.Provider value={name}>
      <Cmp1 context={UserContext} />
    </UserContext.Provider>
  );
}
