// src/pages/About.js
import "./About.css";

function About() {
  return (
    <div className="about-wrapper">
      <section className="intro-section">
        <h1>About This Project</h1>
        <p>
          This tool is designed to help you hide and reveal messages safely using the concept of steganography — a method of concealing information inside digital images.
        </p>
      </section>

      <section className="features-section">
        <div className="feature-box">
          <h2>🔐 Privacy</h2>
          <p>Secure your messages by embedding them in images with the option to use a password.</p>
        </div>
        <div className="feature-box">
          <h2>🧠 Simplicity</h2>
          <p>Built to be clean, fast, and easy to use — no technical expertise required.</p>
        </div>
        <div className="feature-box">
          <h2>🎯 Purpose</h2>
          <p>Ideal for learners, educators, and anyone interested in secure communication.</p>
        </div>
      </section>

    </div>
  );
}

export default About;
