// services/api.ts
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';  // Your backend URL

export const signup = async (username: string, email: string, mobile: number, password: string) => {
  const response = await axios.post(`${API_URL}/signup`, { username, email, mobile, password });
  return response.data;
};

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

export const protectedRoute = async () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');
  const response = await axios.get(`${API_URL}/protected`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
