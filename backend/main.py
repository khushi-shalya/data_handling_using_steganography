from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from stegano_utils import encode_image, decode_image

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/Encode")
async def encode(file: UploadFile = File(...), message: str = Form(...), password: str = Form(None)):
    try:
        result_path = encode_image(file.file, message, password)
        return {"status": "success", "message": "Image encoded", "path": result_path}
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

@app.post("/Decode")
async def decode(file: UploadFile = File(...), password: str = Form(None)):
    try:
        message = decode_image(file.file, password)
        return {"status": "success", "message": message}
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
