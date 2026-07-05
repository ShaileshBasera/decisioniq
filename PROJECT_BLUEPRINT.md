# DecisionIQ - Project Blueprint

> **Version:** 1.3
> **Status:** In Development
> **Last Updated:** Sprint 2

---

# Current Status

**Project Status:** In Development

**Current Sprint:** Sprint 3 - AI Document understanding

**Overall Progress:** 30%

## Completed

- [x] Project Created
- [x] Git Initialized
- [x] React + Vite Setup
- [x] Tailwind CSS Setup
- [x] FastAPI Setup
- [x] Frontend ↔ Backend Connection
- [x] Document Upload
- [x] PDF Text Extraction
- [ ] Gemini Integration
- [ ] SQLite Integration
- [ ] Dashboard
- [ ] Document Details Page
- [ ] AI Chat
- [ ] Risk Detection
- [ ] Recommendations
- [ ] Deployment

## Current Task

Integrate Google Gemini to analyze extracted contract text and generate AI-powered insights.

## Next Task

Generate executive summaries and extract key contract metadata using Gemini.

---

# 1. Project Overview

## Evolution

The project idea has evolved from sprint 3.

Originally it was:

Upload PDF → Ask Gemini

Now it's:

Build a structured knowledge repository from contracts and place an AI assistant on top of it.

## Project Name

DecisionIQ

## Tagline

AI-Powered Contract Intelligence & Decision Support Platform

## Elevator Pitch

DecisionIQ is an AI-powered Decision Intelligence platform that ingests commercial documents, extracts structured business knowledge, stores it in a centralized repository, and provides an intelligent assistant capable of answering questions about individual contracts as well as the entire contract portfolio.

---

# 2. Problem Statement

Organizations manage hundreds or thousands of contracts and commercial documents.

Finding information such as

- Contract expiry dates
- Payment terms
- Pricing clauses
- Renewal conditions
- Business risks

is time consuming and error prone.

DecisionIQ uses Generative AI to automatically analyze these documents and provide business recommendations.

---

# 3. Vision

Build an enterprise-style AI Decision Intelligence platform that combines structured contract data with Generative AI to support both document-level and repository-level business decisions. The platform should intelligently decide when to answer using stored metadata, database queries, or AI reasoning, rather than relying solely on an LLM.

The application should be

- Professional
- Easy to understand
- Easy to demonstrate
- Easy to extend

---

# 4. Architecture Principles

The project follows these architectural principles.

### 1. Keep it Simple

The project is being developed as a first full-stack AI application.

Solutions should prioritize readability and learning over unnecessary abstraction.

---

### 2. Build Incrementally

Each sprint should produce a working application.

No feature should break existing functionality.

---

### 3. Separate Responsibilities

Frontend

- User Interface

Backend

- Business Logic

AI

- Analysis and Recommendations

Database

- Storage

---

### 4. Delay Complexity

Files, libraries and services are introduced only when they become necessary.

Avoid premature optimization.

### 5. Learn while building

This project is not only a hackathon submission but also a learning journey.

Design decisions should favor understanding and long-term maintainability over short-term shortcuts.


### 6. Use AI Only Where It Adds Value

DecisionIQ should prefer structured data and deterministic business logic whenever possible. Generative AI should be used primarily for reasoning, summarization, comparison, and explanation rather than simple data retrieval.

---

# 5. MVP Scope

## Document Management

- [ ] Upload PDF
- [ ] Upload DOCX
- [ ] Upload TXT

---

## AI Analysis

- [ ] Executive Summary
- [ ] Key Parties
- [ ] Effective Date
- [ ] Expiry Date
- [ ] Payment Terms
- [ ] Renewal Clause
- [ ] Termination Clause
- [ ] Pricing Information

---

## Risk Analysis

- [ ] Detect Missing Clauses
- [ ] Highlight Business Risks
- [ ] Identify Expiring Contracts

---

## Decision Support

- [ ] AI Recommendations
- [ ] Suggested Next Actions
- [ ] Explain Recommendations

---

## Chat

- [ ] Ask Questions
- [ ] Context-aware Responses

---

## Dashboard

- [ ] Upload Statistics
- [ ] Contract Summary
- [ ] Risk Overview
- [ ] Recent Documents

---

# 6. User Journey

Upload Document

↓

Extract Text

↓

Generate AI Analysis

↓

Store in SQLite

↓

Open Document Details

↓

Ask AI About Document

↓

Ask AI About Repository

↓

Receive Decision Support

---

# 7. Solution Architecture

```
                    User

                      │

                      ▼

               React Frontend

                      │

               REST API (FastAPI)

                      │

        ┌─────────────┴─────────────┐

        │                           │

        ▼                           ▼

 Document Parser              SQLite Database

        │                           ▲
        │                           │
        └─────────────┬─────────────┘
                      │
                      ▼

                Gemini API

                      │
                      ▼

        AI Assistant / Decision Layer

        ┌─────────────┼─────────────┐
        │             │             │
        ▼             ▼             ▼

 Document AI    Repository AI   Decision Support

        │             │             │
        └─────────────┼─────────────┘
                      ▼

      Summary

      Metadata

      Risk Analysis

      Recommendations

      Decision Support

      AI Chat
```

## AI Assistant Workflow
# 15. AI Assistant Workflow

DecisionIQ intelligently routes user questions to the most appropriate processing method instead of sending every request directly to Gemini.

```
                    User Question
                           │
                           ▼
                    Intent Routing
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
   Document Query   Repository Query   AI Reasoning
          │                │                │
          ▼                ▼                ▼
     Gemini API      SQLite Database    Gemini API
          │                │                │
          └────────────────┼────────────────┘
                           ▼
                     Final Response
```

### Query Types

- **Document Query**
  - Questions about a single uploaded document.
  - Example: *"Summarize the termination clause."*

- **Repository Query**
  - Questions spanning multiple uploaded documents.
  - Example: *"Show contracts expiring this month."*

- **AI Reasoning**
  - Business analysis requiring reasoning across one or more contracts.
  - Example: *"Which contracts present the highest business risk?"*

This architecture allows DecisionIQ to combine structured database queries with Gemini's reasoning capabilities, improving accuracy, reducing unnecessary AI calls, and providing enterprise-style decision support.

---

# 8. Technology Stack

## Frontend

- React
- Vite
- Tailwind CSS

## Backend

- FastAPI

## AI

- Google Gemini API

## Database

- SQLite

## File Parsing

- PyMuPDF
- python-docx

## Deployment

- Google Cloud Run

---

# 9. Project Structure

```
decisioniq/

├── frontend/
│
├── backend/
│   ├── main.py
│   ├── routes.py
│   ├── ai.py
│   ├── parser.py
│   ├── database.py
│   ├── models.py
│   ├── utils.py
│   └── uploads/
│
├── sample-data/
│
├── PROJECT_BLUEPRINT.md
├── IDEAS.md
├── README.md
├── requirements.txt
└── .gitignore
```

---

# 10. Backend Architecture

The backend follows a modular structure. Files will only be created when required by the project to avoid unnecessary complexity.

| File | Purpose |
|------|---------|
| main.py | Starts the FastAPI application |
| routes.py | API endpoints |
| ai.py | Gemini API integration |
| parser.py | PDF/DOCX/TXT extraction |
| database.py | SQLite operations |
| models.py | Shared data models |
| utils.py | Helper functions |
| uploads/ | Uploaded documents |

# 11. Application Screens

## Dashboard

Displays

- Documents Uploaded
- High Risk Contracts
- Expiring Soon
- AI Recommendations
- Recent Uploads

---

## Upload Screen

Supports

- PDF
- DOCX
- TXT

---

## Document Details

Displays

- Executive Summary
- Metadata
- Risks
- Recommendations

---

## AI Chat

Allows users to ask questions about uploaded documents.

---

# 12. Backend APIs

| Method | Endpoint | Purpose |
|---------|----------|----------|
| POST | /upload | Upload document |
| GET | /documents | List documents |
| GET | /documents/{id} | Document details |
| DELETE | /documents/{id} | Delete document |
| POST | /chat | AI Chat |

---

# 13. Database Design

## documents

| Field | Type |
|--------|------|
| id | Integer |
| filename | Text |
| file_type | Text |
| page_count | Integer |
| raw_text | Text |
| summary | Text |
| metadata | JSON |
| risks | JSON |
| recommendations | JSON |
| uploaded_at | DateTime |

---

# 14. AI Capabilities

## Summary

Generate executive summary.

---

## Metadata Extraction

Extract

- Parties
- Dates
- Payment Terms
- Pricing
- Clauses

---

## Risk Detection

Identify

- Missing clauses
- Expiring contracts
- Long payment cycles
- Potential legal concerns

---

## Recommendations

Suggest business actions.

Example

> Begin renewal process within the next 30 days.

---

## AI Assitance

Answer questions about the current document
Answer questions about all uploaded contracts
Compare contracts
Explain recommendations
Summarize contracts
Retrieve stored metadata
Generate business insights

---




# 15. Sprint Plan

## Sprint 1

- [x] Project Setup
- [x] React Setup
- [x] FastAPI Setup
- [x] GitHub Repository
- [x] Frontend ↔ Backend Connection

---

## Sprint 2

- [x] Tailwind CSS Setup
- [x] Upload Document
- [x] Upload API
- [x] Save Uploaded File
- [x] Extract PDF Text
- [x] Display Extracted Text

---
## Sprint 3

- [ ] Backend Refactoring
- [ ] SQLite Integration
- [ ] Gemini Integration
- [ ] Executive Summary
- [ ] Metadata Extraction
- [ ] Risk Detection
- [ ] AI Recommendations
- [ ] Store AI Analysis in SQLite
- [ ] Display AI Analysis

---

## Sprint 4

- [ ] AI Assistant
- [ ] Document Chat
- [ ] Repository Queries
- [ ] Document Details Page

---

## Sprint 5

- [ ] Dashboard
- [ ] Document List
- [ ] Search & Filters

---

## Sprint 6

- [ ] UI Polish
- [ ] Deployment
- [ ] Demo Preparation


---

# 16. Design Principles

The project should always follow these principles.

1. Simplicity over complexity.
2. Build vertically so the application is usable after every sprint.
3. Professional UI with minimal code.
4. Modular Python functions.
5. Every feature should improve the demo.
6. Avoid overengineering.
7. Prefer readability over cleverness.

---

# 17. Decisions Log

## Decision #1

Use React + Vite instead of Next.js.

Reason

Simpler learning curve and faster development.

---

## Decision #2

Use FastAPI.

Reason

Simple REST APIs with excellent Python support.

---

## Decision #3

Use SQLite.

Reason

Easy setup and perfect for an MVP.

---

## Decision #4

Avoid LangGraph and Agent frameworks.

Reason

Keep implementation understandable and focused.

---

## Decision #5

Build a Decision Intelligence Platform with Contract Intelligence as the first module.

Reason

Platform positioning is stronger while implementation remains focused.

---

## Decision #5

Before starting sprint 3 the blueprint was updated to incorporate AI assistance on the whole repository of documents rather than just 1 document.

---

# 18. Future Enhancements

- Cloud Storage
- User Authentication
- Contract Comparison
- Version History
- Email Alerts
- Calendar Integration
- Voice Assistant
- Multi-Agent Architecture
- Procurement Intelligence
- Compliance Intelligence
- Repository-wide semantic search (RAG)
- Clause similarity search
- Multi-document reasoning
- Vector database integration
- Agentic workflows
- Workflow automation

---

# 19. Definition of Success

The MVP is complete when a user can

- Upload a contract
- View AI summary
- View extracted metadata
- View risks
- Receive recommendations
- Ask questions
- Navigate a professional dashboard
- Run the application locally
- Demonstrate it confidently

---

# 20. Development Log

---

## Sprint 0

### Status

Completed

### Work Done

- Finalized project idea.
- Defined MVP scope.
- Finalized technology stack.
- Designed solution architecture.
- Defined folder structure.
- Planned sprint roadmap.
- Created project blueprint.

### Notes

The project will prioritize simplicity while following good engineering practices.

Every sprint should result in a working application.

## Sprint 1

### Status

Completed

### Work Done

- Created GitHub repository.
- Initialized React application using Vite.
- Created FastAPI backend.
- Configured Python virtual environment.
- Implemented first API endpoint.
- Connected React frontend with FastAPI backend.
- Configured CORS for frontend-backend communication.

### Lessons

- Learned the purpose of virtual environments.
- Understood how React communicates with a backend using HTTP requests.
- Learned why CORS is required during local development.

### Outcome

DecisionIQ is now a working full-stack application with React communicating successfully with FastAPI.

## Sprint 2

### Status

Completed

### Work Done

- Configured Tailwind CSS.
- Built the document upload interface.
- Connected React frontend with FastAPI upload endpoint.
- Implemented PDF upload functionality.
- Stored uploaded documents locally.
- Integrated PyMuPDF for PDF text extraction.
- Displayed extracted text within the frontend.
- Created sample commercial contracts for testing.

### Lessons

- Learned how multipart file uploads work between React and FastAPI.
- Understood how FormData is used to upload files.
- Learned how FastAPI handles uploaded files using UploadFile.
- Learned the basics of PDF text extraction using PyMuPDF.
- Understood how frontend and backend communicate during file uploads.

### Outcome

DecisionIQ can now upload contracts, store them, extract their contents, and display the extracted text to the user. The application now has a complete document ingestion pipeline.

---

# 21. Lessons Learned

This section will be updated throughout development.

## Blueprint making

AI suggested to add Architecture Priciples during sprint 1. Next time I would like to do this in sprint 0.

## VS Code

Rename different terminals as frontend, backend. to keep the work separate and not accidentally close them.


## Tailwind CSS

What is Tailwind CSS?

A utility-first CSS framework used to rapidly build modern user interfaces.

Why are we using it?

- Faster UI development
- Consistent styling
- Minimal custom CSS

Key Learnings

- Tailwind integrates with Vite using the official plugin.
- Styling is achieved through utility classes.
- UI development becomes significantly faster.

## PyMuPDF

What is PyMuPDF?

A Python library for reading and extracting text from PDF documents.

Why are we using it?

To convert uploaded contracts into machine-readable text before AI analysis.

Key Learnings

- PDFs can be processed page by page.
- Text extraction is highly accurate for digitally generated PDFs.
- Clean text extraction simplifies downstream AI processing.

Example format

## File Uploads

What did I learn?

- Uploading files from React using FormData.
- Receiving uploaded files in FastAPI.
- Saving uploaded files locally.
- Returning structured JSON responses back to React.

## React

What is React?

Why are we using it?

Key learnings.

---

## FastAPI

What is FastAPI?

Why are we using it?

Key learnings.

---

## Gemini API

What is Gemini?

Why are we using it?

Key learnings.

---

# 22. Next sprint plan

# Sprint 3 Technical Improvements

The following technical improvements have been identified at the end of Sprint 2 and should be incorporated while implementing AI capabilities.

## 1. Backend Refactoring

Current State

The backend currently uses a single `main.py` file for API endpoints, file upload and PDF parsing.

This was an intentional decision to keep Sprint 2 simple.

Planned Improvement

Refactor the backend into separate modules while keeping the implementation lightweight.

Target Structure

backend/

├── main.py          # FastAPI endpoints
├── parser.py        # PDF extraction logic
├── ai.py            # Gemini integration
├── uploads/
└── venv/

Responsibilities

main.py

- FastAPI application
- API endpoints
- Request/Response handling

parser.py

- PDF text extraction
- Document parsing
- Future support for DOCX and TXT

ai.py

- Gemini API integration
- Prompt templates
- AI response processing

---

## 2. Preserve Page-Level Information

Current State

Sprint 2 extracts the complete document as one large text string.

Limitation

Once page boundaries are lost, it becomes difficult to:

- Display page references
- Show source citations
- Highlight clauses
- Support AI chat with references

Planned Improvement

Extract text page-by-page.

Instead of

{
  "text": "Entire document..."
}

Return

{
  "pages": [
    {
      "page": 1,
      "text": "..."
    },
    {
      "page": 2,
      "text": "..."
    }
  ]
}

This structure will later support:

- Source citations
- Clause highlighting
- AI chat references
- Page navigation

---

## 3. Preserve Document Metadata

Store basic metadata immediately after upload.

Example

{
  "filename": "MSA.pdf",
  "pages": 5,
  "size": "420 KB",
  "uploaded_at": "...",
  "text": "..."
}

This metadata will later be used for:

- Dashboard
- Document List
- Search
- Analytics

---

## 4. Replace Raw Text with AI Analysis

Sprint 2 displays the extracted text for validation purposes.

Beginning in Sprint 3, the UI should evolve from a document parser into an AI analysis dashboard.

Current

Upload
↓

Extract Text
↓

Display Raw Text

Target

Upload
↓

Extract Text
↓

Gemini
↓

Executive Summary

↓

Metadata Cards

↓

View Full Extracted Text (optional)

The extracted text should remain available but should no longer be the primary user interface.

---

## 5. Maintain Simplicity

Although backend modularization is planned, avoid introducing unnecessary complexity such as:

- LangGraph
- Agent frameworks
- Repository patterns
- Service layers
- Dependency injection frameworks

DecisionIQ should continue following the project's architecture principles:

- Build incrementally
- Keep implementation understandable
- Prefer working software over perfect architecture

