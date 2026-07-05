from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from database import initialize_database, save_document, save_analysis
from ai import analyze_document

import shutil

from parser import extract_pdf_text

app = FastAPI(
    title="DecisionIQ API",
    version="1.0.0"
)

initialize_database()

UPLOAD_FOLDER = Path("uploads")
UPLOAD_FOLDER.mkdir(exist_ok=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Welcome to DecisionIQ 🚀",
        "status": "Backend Running"
    }


@app.post("/upload")
async def upload_document(file: UploadFile = File(...)):
    file_path = UPLOAD_FOLDER / file.filename

    with file_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text using parser.py
    extracted_text = extract_pdf_text(file_path)

    analysis = analyze_document(extracted_text)
    
    document_id = save_document(file.filename, extracted_text)

    save_analysis(document_id, analysis)

    return {
        "message": "File uploaded successfully",
        "document_id": document_id,
        "filename": file.filename,
        "summary": analysis["summary"],
        "metadata": analysis["metadata"],
        "risks": analysis["risks"],
        "recommendations": analysis["recommendations"]
    }