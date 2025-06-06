import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Decode from "./components/Decode";
import Encode from "./components/Encode";
import Footer from "./components/Footer";
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="components/Encode" element={<Encode/>} />
        <Route path="components/Decode" element={<Decode/>} />
        <Route path="components/About" element={<About/>} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App
