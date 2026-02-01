import axios from "axios";

// Base Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
});

// Existing APIs
export const requestApi = {
  getAll: (params) => api.get("/api/food-requests", { params }),
  getById: (id) => api.get(`/api/food-requests/${id}`),
  create: (data) => api.post("/api/food-requests", data),
};

export const donorApi = {
  getFulfillments: () => api.get("/api/fulfillments"),
  createFulfillment: (data) => api.post("/api/fulfillments", data),
};

export const analyticsApi = {
  getUser: () => api.get("/api/analytics/user"),
  getStats: () => api.get("/api/analytics/stats"),
};

// **Add this to fix Netlify build**
export const utilityApi = {
  getSomething: () => api.get("/api/utility/something"),
  // add any endpoints your code uses from utilityApi
};

// Optional default export
export default api;
