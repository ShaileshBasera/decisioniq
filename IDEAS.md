# Ideas

---

## Better Table Extraction

### Problem

PyMuPDF is excellent for extracting text from digitally generated PDFs, but it does not reliably preserve table structures.

Commercial contracts often contain important information inside tables, such as:

- Pricing schedules
- Volume discounts
- Payment milestones
- Rate cards
- SLAs
- Deliverables
- Commercial assumptions

When extracted using PyMuPDF, these tables are usually flattened into plain text, making downstream AI analysis less accurate.

### Proposed Solution

Implement a hybrid document extraction pipeline.

```
PDF
 │
 ├── Text Extraction → PyMuPDF
 │
 └── Table Extraction → pdfplumber (preferred) or Camelot
                 │
                 ▼
        Structured Table Data
                 │
                 ▼
 Merge Text + Tables into a unified document representation
                 │
                 ▼
 Send enriched context to Gemini
```

### Benefits

- Better pricing intelligence
- Accurate extraction of commercial schedules
- Improved payment term analysis
- Better contract comparison
- More reliable AI recommendations

### Candidate Libraries

- pdfplumber
- Camelot
- Tabula
- AI Vision Models (Gemini Vision / GPT Vision) for complex layouts

### Priority

Medium

Not required for MVP.

Implement after the basic Contract Intelligence workflow is complete.

## Pricing Schedule Intelligence

Many enterprise contracts include pricing information in tables.

Future versions of DecisionIQ should automatically detect and analyze:

- Product pricing
- Volume discounts
- Price escalations
- Rate cards
- Commercial assumptions
- Currency
- Tax information

The extracted table data should be converted into structured JSON so that AI can answer questions such as:

- Which products have the highest price?
- What discount applies above 1,000 units?
- What is the annual price escalation?
- Compare pricing across two contracts.
- Identify unusual commercial terms.

This capability can become a major differentiator for DecisionIQ.

## Suggestion for portfolio

If your goal is to create a strong portfolio project for AI consulting and GenAI engineering roles, I would actually add a small Sprint 7 (2–3 hours) after deployment:

Add loading skeletons and polished error states.
Improve empty states and success messages.
Add sample documents and a one-click demo dataset.
Create a polished README with screenshots and architecture.
Record a 2–3 minute demo video.