// frontend/src/api.js
import axios from "axios";

// Base Axios instance for all APIs
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
});

// Helper: returns a Proxy object for any API
const makeApi = () =>
  new Proxy(
    {},
    {
      get: (_, method) => (...args) => api[method]?.(...args),
    }
  );

// Export **all API objects your components might import**
export const requestApi = makeApi();
export const donorApi = makeApi();
export const analyticsApi = makeApi();
export const utilityApi = makeApi();
export const ngoApi = makeApi();
export const adminApi = makeApi();
export const volunteerApi = makeApi(); // ✅ added

// Default export (optional)
export default api;
