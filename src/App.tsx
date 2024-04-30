import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Email from "./components/email/email";
import Projects from "./components/projects/projects";
import Resume from "./components/resume/resume";
import Navbar from "./components/nav/nav";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Resume />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Email />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <canvas className="background" />
      <script src="path/to/particles.min.js" />
      <Footer />
    </div>
  );
}

export default App;
