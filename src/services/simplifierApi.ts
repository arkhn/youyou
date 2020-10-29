import axios from "axios";

const simplifierApi = axios.create({
  baseURL: "https://fhir.simplifier.net/Arkhn",
  headers:
  {"Accept": "application/fhir+json; fhirVersion=4.0"}
});

export default simplifierApi;
