// src/pages/Decode.js
import axios from "axios";
import { useState } from "react";
import "./Decode.css";

function Decode() {
  const [file, setFile] = useState(null);
  const [usePassword, setUsePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [decodedMessage, setDecodedMessage] = useState("");

  const handleDecode = async () => {
    if (!file) {
      alert("Please upload an image.");
      return;
    }

    if (usePassword && password.trim() === "") {
      alert("Please enter the password or uncheck the password box.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    if (usePassword) {
      formData.append("password", password);
    }

    try {
      const response = await axios.post("http://localhost:8000/Decode", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setDecodedMessage(response.data.message);
      alert("✅ Decoding successful!");
    } catch (error) {
      console.error("Decoding error:", error);
      alert("❌ Decoding failed: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="decode-container">
      <h1>Decode Message from Image</h1>
      <div className="decode-form">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={usePassword}
            onChange={() => setUsePassword(!usePassword)}
          />
          Use Password for Decoding
        </label>

        {usePassword && (
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        )}

        <button onClick={handleDecode}>Decode</button>

        {decodedMessage && (
          <div className="decoded-message">
            <h3>Decoded Message:</h3>
            <p>{decodedMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Decode;
