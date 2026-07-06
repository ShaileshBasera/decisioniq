import api from "./api";

export async function getDocuments() {
  const response = await api.get("/documents");
  return response.data;
}

export async function deleteDocument(documentId) {
  const response = await api.delete(`/documents/${documentId}`);
  return response.data;
}