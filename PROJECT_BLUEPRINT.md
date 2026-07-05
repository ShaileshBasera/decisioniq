# DecisionIQ - Project Blueprint

> **Version:** 1.2
> **Status:** In Development
> **Last Updated:** Sprint 1

---

# Current Status

**Project Status:** In Development

**Current Sprint:** Sprint 2 - Document upload

**Overall Progress:** 15%

## Completed

- [x] Project Created
- [x] Git Initialized
- [x] React + Vite Setup
- [ ] Tailwind CSS Setup
- [x] FastAPI Setup
- [x] Frontend ↔ Backend Connection
- [ ] Document Upload
- [ ] PDF Text Extraction
- [ ] Gemini Integration
- [ ] SQLite Integration
- [ ] Dashboard
- [ ] Document Details Page
- [ ] AI Chat
- [ ] Risk Detection
- [ ] Recommendations
- [ ] Deployment

## Current Task

Build the Document Upload pipeline including PDF upload, parsing, and extracted text preview.

## Next Task

Build the Document Upload feature.

---

# 1. Project Overview

## Project Name

DecisionIQ

## Tagline

AI-Powered Contract Intelligence & Decision Support Platform

## Elevator Pitch

DecisionIQ is an AI-powered decision intelligence platform that helps organizations analyze commercial documents, identify risks, extract key business information, and recommend actions.

Instead of simply answering questions about contracts, DecisionIQ provides actionable business recommendations that support faster and better decision making.

The MVP focuses on Contract Intelligence while keeping the architecture flexible enough to support Procurement, Compliance and other document types in the future.

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

Build an enterprise-style AI application that demonstrates how Generative AI supports business decisions rather than simply acting as a chatbot.

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

```
User opens application

↓

Uploads one or more documents

↓

Document text extracted

↓

Gemini analyzes document

↓

Information stored

↓

Dashboard updated

↓

User opens document

↓

AI Analysis displayed

↓

User asks questions

↓

AI answers using document context

↓

AI recommends actions
```

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

        │                           │

        └─────────────┬─────────────┘

                      ▼

                 Gemini API

                      ▼

      Summary

      Metadata

      Risk Analysis

      Recommendations

      Chat Responses
```

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

## Chat

Answer questions using uploaded document context.

---

# 15. Sprint Plan

## Sprint 1

- [ ] Project Setup
- [ ] React Setup
- [ ] Tailwind Setup
- [ ] FastAPI Setup
- [ ] GitHub Repository
- [ ] Frontend ↔ Backend Connection

---

## Sprint 2

- [ ] Upload Document
- [ ] Extract Text
- [ ] Display Extracted Text

---

## Sprint 3

- [ ] Gemini Integration
- [ ] Executive Summary
- [ ] Metadata Extraction

---

## Sprint 4

- [ ] SQLite Integration
- [ ] Dashboard
- [ ] Document List

---

## Sprint 5

- [ ] AI Chat

---

## Sprint 6

- [ ] Risk Detection
- [ ] Recommendations

---

## Sprint 7

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

---

# 21. Lessons Learned

This section will be updated throughout development.

## Blueprint making

AI suggested to add Architecture Priciples during sprint 1. Next time I would like to do this in sprint 0.

## VS Code

Rename different terminals as frontend, backend. to keep the work separate and not accidentally close them.


Example format

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

# 22. References

Useful documentation

- React Documentation
- Vite Documentation
- Tailwind CSS Documentation
- FastAPI Documentation
- Google AI Studio
- Gemini API Documentation
- PyMuPDF Documentation

These references will be updated as new technologies are introduced during development.