// frontend/src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const adminApi = API;       // admin requests
export const donorApi = API;       // donor requests
export const volunteerApi = API;   // volunteer requests
export const analyticsApi = API;   // analytics requests
export const ngoApi = API;         // NGO requests

export const requestApi = {
  createRequest: (data) => API.post('/requests', data),
  getAllRequests: () => API.get('/requests'),
};
