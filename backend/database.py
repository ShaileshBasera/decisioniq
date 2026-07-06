import sqlite3
import json

DATABASE_NAME = "decisioniq.db"


def get_connection():
    return sqlite3.connect(DATABASE_NAME)


def initialize_database():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS documents (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT,
            raw_text TEXT,
            summary TEXT,
            metadata TEXT,
            risks TEXT,
            recommendations TEXT
        )
    """)

    conn.commit()
    conn.close()


def save_document(filename, raw_text):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO documents (filename, raw_text)
        VALUES (?, ?)
        """,
        (filename, raw_text),
    )

    conn.commit()

    document_id = cursor.lastrowid

    conn.close()

    return document_id


def save_analysis(document_id, analysis):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        UPDATE documents
        SET
            summary = ?,
            metadata = ?,
            risks = ?,
            recommendations = ?
        WHERE id = ?
        """,
        (
            analysis["summary"],
            json.dumps(analysis["metadata"]),
            json.dumps(analysis["risks"]),
            json.dumps(analysis["recommendations"]),
            document_id,
        ),
    )

    conn.commit()
    conn.close()


def get_all_documents():
    conn = get_connection()
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            id,
            filename,
            summary,
            risks,
            recommendations
        FROM documents
        ORDER BY id DESC
    """)

    rows = cursor.fetchall()
    conn.close()

    documents = []

    for row in rows:
        doc = dict(row)

        doc["risks"] = json.loads(doc["risks"] or "[]")
        doc["recommendations"] = json.loads(
            doc["recommendations"] or "[]"
        )

        documents.append(doc)

    return documents


def get_document(document_id):
    conn = get_connection()
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT *
        FROM documents
        WHERE id = ?
        """,
        (document_id,),
    )

    row = cursor.fetchone()

    conn.close()

    if row is None:
        return None

    document = dict(row)

    document["metadata"] = json.loads(document["metadata"] or "{}")
    document["risks"] = json.loads(document["risks"] or "[]")
    document["recommendations"] = json.loads(
        document["recommendations"] or "[]"
    )

    return document


def get_all_documents_full():
    conn = get_connection()
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    cursor.execute("""
        SELECT *
        FROM documents
        ORDER BY id DESC
    """)

    rows = cursor.fetchall()

    conn.close()

    documents = []

    for row in rows:
        doc = dict(row)

        doc["metadata"] = json.loads(doc["metadata"] or "{}")
        doc["risks"] = json.loads(doc["risks"] or "[]")
        doc["recommendations"] = json.loads(
            doc["recommendations"] or "[]"
        )

        documents.append(doc)

    return documents