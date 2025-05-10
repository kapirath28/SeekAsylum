import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8086/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userEmail');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const userService = {
  getUserByEmail: (email) => api.get(`/users/${email}`),
};

export const authService = {
  login: (email, password) => api.post('/users/login', { email, password }),
  register: (email, password) => api.post('/users/register', { email, password }),
};

export default api; 