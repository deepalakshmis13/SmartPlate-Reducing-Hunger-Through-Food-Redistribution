// frontend/src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const adminApi = API;    // for admin requests
export const donorApi = API;    // for donor requests
export const volunteerApi = API; // for volunteer requests
export const analyticsApi = API; // for analytics requests
export const ngoApi = API;       // for NGO requests
