// src/pages/Home.js
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleEncodeClick = () => {
    navigate("components/Encode");
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to InfoSpectra</h1>
        <p>A secure platform for hiding and retrieving secret data using advanced steganography techniques.</p>
        <button className="cta-button" onClick={handleEncodeClick}>
          Let's Start
        </button>
      </div>

      <div className="features">
        <div className="feature-box">
          <h2>🔒 Secure Encoding</h2>
          <p>Embed sensitive data into images without altering visible quality.</p>
        </div>
        <div className="feature-box">
          <h2>📤 Easy Upload</h2>
          <p>Drag and drop files to encode or decode with simplicity and speed.</p>
        </div>
        <div className="feature-box">
          <h2>🛡️ Privacy First</h2>
          <p>End-to-end handling with your data privacy at its core.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
