import React from "react";
import Component1 from "./component/Component1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Component2 from "./component/Component2";
import Component3 from "./component/Component3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Component1 />} />
        <Route path="/cmp2" element={<Component2 />} />
        <Route path="/cmp3" element={<Component3 />} />
      </Routes>
    </BrowserRouter>
  );
}
