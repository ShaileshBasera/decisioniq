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

def answer_question(question, document):
    prompt = f"""
You are an expert commercial contract analyst.

Answer the user's question using ONLY the information from the contract below.

If the answer cannot be determined from the contract, say:
"I couldn't find that information in this contract."

Contract Summary:
{document["summary"]}

Metadata:
{json.dumps(document["metadata"], indent=2)}

Risks:
{json.dumps(document["risks"], indent=2)}

Recommendations:
{json.dumps(document["recommendations"], indent=2)}

Full Contract:
{document["raw_text"]}

User Question:
{question}

Respond in plain English.
Do not use markdown.
Keep the answer concise.
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
        config=types.GenerateContentConfig(
            temperature=0.2,
        ),
    )

    return response.text


def answer_repository_question(question, documents):

    prompt = f"""
You are an enterprise contract intelligence assistant.

Below is the organization's contract repository.

{json.dumps(documents, indent=2)}

Answer the user's question using ALL contracts.

If comparison is required, compare them.

If filtering is required, filter them.

Be concise.

Question:

{question}
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
        config=types.GenerateContentConfig(
            temperature=0.2,
        ),
    )

    return response.text