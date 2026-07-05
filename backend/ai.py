from google import genai
from google.genai import types
import json

PROJECT_ID = "genaiacademymay2026-497712"
LOCATION = "us-central1"

client = genai.Client(
    vertexai=True,
    project=PROJECT_ID,
    location=LOCATION,
)


def analyze_document(text):
    prompt = f"""
You are an expert contract analyst.

Analyze the contract and return ONLY valid JSON.

Use this exact structure.

{{
  "summary": "...",

  "metadata": {{
    "parties": "...",
    "effective_date": "...",
    "expiry_date": "...",
    "payment_terms": "..."
  }},

  "risks": [
    "...",
    "..."
  ],

  "recommendations": [
    "...",
    "..."
  ]
}}

Do not include markdown.
Do not include ```json.
Return only JSON.

Contract:

{text}
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
        config=types.GenerateContentConfig(
            temperature=0.2,
        ),
    )

    return json.loads(response.text)