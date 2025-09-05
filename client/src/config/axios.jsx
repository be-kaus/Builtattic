// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4500/api", // 👈 change this to your backend URL
  withCredentials: true, // ✅ allow sending/receiving cookies
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
