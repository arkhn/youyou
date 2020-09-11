import axios from "axios";
import { AUTH_TOKEN_KEY, FHIR_API_URL } from "src/constants";

const token: string = AUTH_TOKEN_KEY;

const api = axios.create({
  baseURL: FHIR_API_URL,
  headers: {
    authorization: `Bearer ${token}`
  }
});

export default api;
