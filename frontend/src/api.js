import axios from "axios";

// Base Axios instance for the entire app
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
});

// Export dummy objects for all previous imports
export const requestApi = new Proxy({}, {
  get: (_, method) => (...args) => api[method]?.(...args)
});

export const donorApi = new Proxy({}, {
  get: (_, method) => (...args) => api[method]?.(...args)
});

export const analyticsApi = new Proxy({}, {
  get: (_, method) => (...args) => api[method]?.(...args)
});

export const utilityApi = new Proxy({}, {
  get: (_, method) => (...args) => api[method]?.(...args)
});

// Default export (optional)
export default api;
