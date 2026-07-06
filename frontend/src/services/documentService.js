import api from "./api";

export async function getDocuments() {
  const response = await api.get("/documents");
  return response.data;
}