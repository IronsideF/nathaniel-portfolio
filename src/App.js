import JavaScriptProject from "./containers/JavaScriptProject";
import PythonProject from "./containers/PythonProject";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import LandingPage from "./containers/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'

function App() {

  const [preview, setPreview] = useState()

  return (
  <Router>
  <NavBar setPreview={setPreview}/>
    <Routes>
      <Route path="/nathaniel-portfolio/" element={<LandingPage preview={preview}/>}/>
      <Route path="/tobys-angels/" element={<PythonProject/>}/>
      <Route path="/devils-grip/" element={<JavaScriptProject/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </Router>
  );
}

export default App;
