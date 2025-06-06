from PIL import Image
from pathlib import Path
from stegano import lsb
import zlib
import base64

def encode_image(image_file, message, password=None):
    # Load image
    image = Image.open(image_file)

    # Append password and marker
    full_message = message
    if password:
        full_message = password + "::" + message
    full_message += "::END::"

    # Compress and encode to base64
    compressed = zlib.compress(full_message.encode())
    encoded_data = base64.b64encode(compressed).decode()

    # Check image capacity (optional but useful)
    max_capacity = image.width * image.height * 3 // 8
    if len(encoded_data) > max_capacity:
        raise ValueError("Message too long for this image. Use a larger image or shorter text.")

    # Hide message
    encoded_image = lsb.hide(image, encoded_data)

    # Save image to /photo folder
    photo_dir = Path(__file__).resolve().parent / "photo"
    photo_dir.mkdir(exist_ok=True)
    output_path = photo_dir / "encoded_image.png"
    encoded_image.save(output_path)

    return str(output_path)


def decode_image(image_file, password=None):
    # Load image
    image = Image.open(image_file)

    # Reveal and decode message
    hidden_data = lsb.reveal(image)
    if hidden_data is None:
        raise ValueError("No hidden message found in image.")

    try:
        decoded_bytes = base64.b64decode(hidden_data.encode())
        decompressed = zlib.decompress(decoded_bytes).decode()
    except Exception:
        raise ValueError("Message is corrupted or not decodable.")

    # Trim the ::END:: marker
    if "::END::" in decompressed:
        decompressed = decompressed.split("::END::")[0]
    else:
        raise ValueError("End marker not found. Message may be corrupted.")

    # Handle password check
    if "::" in decompressed:
        extracted_password, real_message = decompressed.split("::", 1)
        if password:
            if extracted_password == password:
                return real_message
            else:
                raise ValueError("Incorrect password.")
        else:
            raise ValueError("Password required to decode this message.")
    else:
        if password:
            raise ValueError("This message is not password-protected. Do not enter a password.")
        return decompressed
