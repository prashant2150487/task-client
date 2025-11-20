// src/api/axiosInstance.ts
import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// Define your base API configuration
const axiosConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL + "/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};

// Create the axios instance
const axiosInstance: AxiosInstance = axios.create(axiosConfig);

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add auth tokens here
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // Handle common errors
    // if (error.response?.status === 403) {
      // Handle unauthorized access
      // localStorage.removeItem("authToken");
      // if (window.location.pathname !== "/login") {
      //   window.location.href = "/login";
      // }
    // }
    return Promise.reject(error);
  }
);

export default axiosInstance;
