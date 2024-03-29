import axios from 'axios';
import { AUTH_TOKEN_KEY, FHIR_API_URL } from '../constants';

const api = axios.create({
  baseURL: FHIR_API_URL,
  headers: {
    authorization: AUTH_TOKEN_KEY
  }
});

export default api;
