# data_handling_using_steganography
A secure steganography web application that allows users to hide and retrieve secret messages in images, with optional password protection. Built using React (Vite) for the frontend and FastAPI for the backend.

**🔷 Purpose**

The main purpose of this project is to securely hide sensitive information (like messages or passwords) inside images using steganography, so the message is invisible to anyone not authorized to see it. This is especially useful in cybersecurity, personal privacy, and secure communication.



**🧠 How It Helps**

✅ Prevents unauthorized access to messages by hiding them inside images

✅ Adds an extra layer of protection with optional password encryption

✅ Useful for sending secret information without drawing attention

✅ Simple web interface – no need to install software



**✨ Key Features**

🖼️ Encode Messages	Hide secret text inside .png images
🔐 Password Protection	Protect messages with a password during encoding
🧾 Decode Hidden Messages	Extract hidden data from images using the correct password (if used)
📱 Clean Web Interface	User-friendly design using React (Vite)
⚡ Fast Processing	Backend built on FastAPI for quick image processing
🧩 No Sign-In Required	Open for anyone to use securely


![image](https://github.com/user-attachments/assets/4e0045d0-c31c-4f88-9aed-c3e27de09f2d)

**⚙️ Working Principle**

Encoding Process

User uploads a image and enters a secret message.

Optionally, the user can set a password.

The backend encodes this message (and password, if provided) into the image using a steganography algorithm.

The encoded image (called stego image) is returned to the user for download.

Decoding Process

User uploads the stego image.

If a password was used, it must be entered to extract the message.

The backend reads hidden data from the image and returns the original message.

