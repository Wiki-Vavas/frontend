import axios from "axios";

export const baseURL = "http://localhost/Arquivos%20Json";

export const api = axios.create({
  baseURL
});
