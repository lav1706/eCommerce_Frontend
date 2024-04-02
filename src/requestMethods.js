import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDMxZTc2NTdlOWUyOTkwOWM5ODkwYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMTUyMzE0NiwiZXhwIjoxNzExNzgyMzQ2fQ.8Pg5iKGNOHzKOSwJwsPAZKlO_QMfhH-Id4MZp30-KEM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
