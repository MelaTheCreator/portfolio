import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CVPrint from "./pages/CVPrint";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import CV from "./pages/CV";
import Impressum from "./pages/Impressum";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/cv" element={<CV />} />
          <Route path="/about/cv/print" element={<CVPrint />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/impressum" element={<Impressum />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
