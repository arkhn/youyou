import axios from 'axios';
import { AUTH_TOKEN_KEY, FHIR_API_URL } from '../constants';

const token = AUTH_TOKEN_KEY;

const api = axios.create({
  baseURL: FHIR_API_URL,
  headers: {
    authorization: token
  }
});

export default api;
