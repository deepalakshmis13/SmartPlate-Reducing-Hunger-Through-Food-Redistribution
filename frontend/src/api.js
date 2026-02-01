// frontend/src/api.js
import axios from "axios";

// Single Axios instance with correct backend
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // must match .env
  headers: { "Content-Type": "application/json" },
});

// Example APIs for your components
export const requestApi = api;
export const donorApi = api;
export const analyticsApi = api;
export const utilityApi = api;
export const ngoApi = api;
export const adminApi = api;
export const volunteerApi = api;

export default api;
