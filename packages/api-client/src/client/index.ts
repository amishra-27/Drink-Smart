import axios from 'axios';

// Create base API client
export const apiClient = axios.create({
  baseURL: process.env.API_URL || 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example API methods
export const fetchData = async <T>(endpoint: string): Promise<T> => {
  const response = await apiClient.get<T>(endpoint);
  return response.data;
};

export const postData = async <T, D>(endpoint: string, data: D): Promise<T> => {
  const response = await apiClient.post<T>(endpoint, data);
  return response.data;
};

// React Query hooks could be added here 