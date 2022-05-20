import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from "./components/About";
import SPA from "./components/SPA";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SPA />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;