import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userEmail = localStorage.getItem('userEmail');
      setUser({ email: userEmail });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8086/api/users/login', {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userEmail', email);
      setUser({ email });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const register = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8086/api/users/register', {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userEmail', email);
      setUser({ email });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
} 