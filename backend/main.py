from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from database import (
    initialize_database,
    save_document,
    save_analysis,
    get_all_documents,
    get_document,
    get_all_documents_full,
    delete_document,
)

from ai import (
    analyze_document,
    answer_question,
    answer_repository_question,
)
from pydantic import BaseModel

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
    allow_origins=[
        "http://localhost:5173",
        "https://genaiacademymay2026-497712.web.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    question: str


class RepositoryChatRequest(BaseModel):
    question: str


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


@app.get("/documents")
def list_documents():
    return get_all_documents()


@app.get("/documents/{document_id}")
def document_details(document_id: int):
    document = get_document(document_id)

    if document is None:
        return {"error": "Document not found"}

    return document


@app.delete("/documents/{document_id}")
def delete_document_endpoint(document_id: int):

    deleted = delete_document(document_id)

    if not deleted:
        return {
            "error": "Document not found"
        }

    return {
        "message": "Document deleted successfully"
    }


@app.post("/documents/{document_id}/chat")
def chat_with_document(document_id: int, request: ChatRequest):

    document = get_document(document_id)

    if document is None:
        return {
            "error": "Document not found"
        }

    answer = answer_question(
        request.question,
        document,
    )

    return {
        "answer": answer
    }


@app.post("/repository/chat")
def repository_chat(request: RepositoryChatRequest):

    documents = get_all_documents_full()

    if len(documents) == 0:
        return {
            "answer": "No documents have been uploaded yet."
        }

    # Remove raw_text to reduce prompt size
    repository = []

    for doc in documents:
        repository.append(
            {
                "id": doc["id"],
                "filename": doc["filename"],
                "summary": doc["summary"],
                "metadata": doc["metadata"],
                "risks": doc["risks"],
                "recommendations": doc["recommendations"],
            }
        )

    answer = answer_repository_question(
        request.question,
        repository,
    )

    return {
        "answer": answer
    }