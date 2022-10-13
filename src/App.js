import JavaScriptProject from "./containers/JavaScriptProject";
import PythonProject from "./containers/PythonProject";
import JavaProject from "./containers/JavaProject";
import PageNotFound from "./components/PageNotFound";
import LandingPage from "./containers/LandingPage";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

function App() {

  return (
  <Router>
    <Routes>
      <Route path="/nathaniel-portfolio/" element={<LandingPage/>}/>
      <Route path="/tobys-angels/" element={<PythonProject/>}/>
      <Route path="/devils-grip/" element={<JavaScriptProject/>}/>
      <Route path="/caledonia/" element={<JavaProject/>}/>
      <Route path="/about/" element={<About/>}/>
      <Route path="/contact/" element={<Contact/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </Router>
  );
}

export default App;
