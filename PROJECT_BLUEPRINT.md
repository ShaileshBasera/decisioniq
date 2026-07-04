# DecisionIQ - Project Blueprint

> **Version:** 1.1
> **Status:** Planning
> **Last Updated:** Sprint 0

---

# Current Status

**Project Status:** Planning

**Current Sprint:** Sprint 1 - Project Setup

**Overall Progress:** 0%

## Completed

- [ ] Project Created
- [ ] Git Initialized
- [ ] React + Vite Setup
- [ ] Tailwind CSS Setup
- [ ] FastAPI Setup
- [ ] Frontend ↔ Backend Connection
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

Set up the project structure and development environment.

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

# 4. MVP Scope

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

# 5. User Journey

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

# 6. Solution Architecture

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

# 7. Technology Stack

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

# 8. Project Structure

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

# 9. Application Screens

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

# 10. Backend APIs

| Method | Endpoint | Purpose |
|---------|----------|----------|
| POST | /upload | Upload document |
| GET | /documents | List documents |
| GET | /documents/{id} | Document details |
| DELETE | /documents/{id} | Delete document |
| POST | /chat | AI Chat |

---

# 11. Database Design

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

# 12. AI Capabilities

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

# 13. Sprint Plan

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

# 14. Design Principles

The project should always follow these principles.

1. Simplicity over complexity.
2. Build vertically so the application is usable after every sprint.
3. Professional UI with minimal code.
4. Modular Python functions.
5. Every feature should improve the demo.
6. Avoid overengineering.
7. Prefer readability over cleverness.

---

# 15. Decisions Log

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

# 16. Future Enhancements

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

# 17. Definition of Success

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

# 18. Development Log

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

---

# 19. Lessons Learned

This section will be updated throughout development.

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

# 20. References

Useful documentation

- React Documentation
- Vite Documentation
- Tailwind CSS Documentation
- FastAPI Documentation
- Google AI Studio
- Gemini API Documentation
- PyMuPDF Documentation

These references will be updated as new technologies are introduced during development.