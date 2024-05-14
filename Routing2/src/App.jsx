import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Contact from "./component/Contact";
import Blog from "./component/Blog";
import About from "./component/About";

import NavigationBar from "./component/navbar/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
