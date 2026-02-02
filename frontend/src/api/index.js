import axios from 'axios';

// 1️⃣ Set your base URL for your backend API
// Replace this with your actual backend URL
const BASE_URL = 'https://smartplate-reducing-hunger-through-food-wqpn.onrender.com';

// 2️⃣ Create a reusable request function
export const requestApi = async (endpoint, method = 'GET', data = null, headers = {}) => {
  try {
    const response = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      headers,
    });
    return response.data; // returns the data directly
  } catch (error) {
    console.error('API request error:', error.response || error.message);
    throw error;
  }
};

// 3️⃣ Optional: You can create specific API functions for convenience
export const registerUser = (userData) => requestApi('/auth/register', 'POST', userData);
export const loginUser = (credentials) => requestApi('/auth/login', 'POST', credentials);
export const getRequests = () => requestApi('/requests', 'GET');
