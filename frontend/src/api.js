import axios from "axios";

// Set base URL globally
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
});

// Wrap API calls in objects so old imports still work
export const requestApi = {
  getAll: (params) => api.get("/api/food-requests", { params }),
  getById: (id) => api.get(`/api/food-requests/${id}`),
  create: (data) => api.post("/api/food-requests", data),
  // add other requestApi endpoints if needed
};

export const donorApi = {
  getFulfillments: () => api.get("/api/fulfillments"),
  createFulfillment: (data) => api.post("/api/fulfillments", data),
  // add other donorApi endpoints if needed
};

export const analyticsApi = {
  getUser: () => api.get("/api/analytics/user"),
  getStats: () => api.get("/api/analytics/stats"),
  // add other analyticsApi endpoints if needed
};

// Default export for general use (optional)
export default api;
