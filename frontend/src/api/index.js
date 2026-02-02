import axios from 'axios';

// Replace with your backend URL
const BASE_URL = 'https://smartplate-backend.example.com/api';

export const requestApi = async (endpoint, method = 'GET', data = null, headers = {}) => {
  try {
    const response = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    console.error('API request error:', error.response || error.message);
    throw error;
  }
};

// Optional: convenience functions
export const registerUser = (userData) => requestApi('/auth/register', 'POST', userData);
export const loginUser = (credentials) => requestApi('/auth/login', 'POST', credentials);
