import JavaScriptProject from "./containers/JavaScriptProject";
import PythonProject from "./containers/PythonProject";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import LandingPage from "./containers/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  <Router>
  <NavBar/>
    <Routes>
      <Route exact path="/" element={<LandingPage/>}/>
      <Route path="/tobys-angels" element={<PythonProject/>}/>
      <Route path="/devils-grip" element={<JavaScriptProject/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </Router>
  );
}

export default App;
