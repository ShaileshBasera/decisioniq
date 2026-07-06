import axios from "axios";

const api = axios.create({
  baseURL: "https://decisioniq-api-873340953226.asia-south1.run.app",
});

export default api;