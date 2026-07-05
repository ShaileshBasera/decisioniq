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