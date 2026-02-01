// frontend/src/api.js
import axios from "axios";

// Base Axios instance for the entire app
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
});

// Proxy factory: creates a dummy API object that forwards any method to Axios
const makeApi = () => new Proxy({}, {
  get: (_, method) => (...args) => api[method]?.(...args)
});

// Export all API objects your components might import
export const requestApi = makeApi();
export const donorApi = makeApi();
export const analyticsApi = makeApi();
export const utilityApi = makeApi();
export const ngoApi = makeApi();

// Default export (optional)
export default api;
