// src/pages/Encode.js
import axios from "axios";
import { useState } from "react";
import "./Encode.css";

function Encode() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [usePassword, setUsePassword] = useState(false);
    const [password, setPassword] = useState("");

    const handleEncode = async () => {
        if (!file || !message) {
            alert("Please upload an image and enter a message.");
            return;
        }

        if (usePassword && password.trim() === "") {
            alert("Please enter a password or uncheck the password option.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("message", message);
        formData.append("password", usePassword ? password : "");

        try {
            const response = await axios.post("http://localhost:8000/Encode", formData);
            alert("✅ Success: " + response.data.message + "\n📁 Path: " + response.data.path);
        } catch (error) {
            console.error(error);
            alert("❌ Error: " + (error.response?.data?.error || "Something went wrong"));
        }
    };

    return (
        <div className="encode-container">
            <h1>Encode Message into Image</h1>
            <div className="encode-form">
                <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
                <textarea
                    placeholder="Enter your secret message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}>
                </textarea>

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={usePassword}
                        onChange={() => setUsePassword(!usePassword)} />
                    Use Password for Encoding
                </label>

                {usePassword && (
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                )}

                <button onClick={handleEncode}>Encode</button>
            </div>
        </div>
    );
}

export default Encode;
