// frontend/src/api.js
import axios from "axios";

// Base Axios instance for the entire app
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
});

// Helper function to create API objects dynamically
const makeApi = () =>
  new Proxy(
    {},
    {
      get: (_, method) => (...args) => api[method]?.(...args),
    }
  );

// Export **all API objects** your components might import
export const requestApi = makeApi();
export const donorApi = makeApi();
export const analyticsApi = makeApi();
export const utilityApi = makeApi();
export const ngoApi = makeApi();
export const adminApi = makeApi();

// Optional: default export for general Axios use
export default api;
