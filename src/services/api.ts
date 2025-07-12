const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to handle API responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Network error' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

import { supabase } from '@/integrations/supabase/client';

// Auth API
export const authAPI = {
  signup: async (userData: any) => {
    // Supabase sign up
    const { email, password, fullName, username } = userData;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          fullName,
          username,
        },
      },
    });
    if (error) throw new Error(error.message);
    // Optionally, you can return the session and user
    return {
      token: data.session?.access_token || '',
      user: {
        id: data.user?.id,
        email: data.user?.email,
        fullName: fullName,
        username: username,
        points: 0,
        rating: 0,
        isAdmin: false,
        avatar: '',
      },
    };
  },

  login: async (credentials: any) => {
    const { email, password } = credentials;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error(error.message);
    // Optionally, you can return the session and user
    return {
      token: data.session?.access_token || '',
      user: {
        id: data.user?.id,
        email: data.user?.email,
        fullName: data.user?.user_metadata?.fullName || '',
        username: data.user?.user_metadata?.username || '',
        points: 0,
        rating: 0,
        isAdmin: false,
        avatar: '',
      },
    };
  },

  getCurrentUser: async () => {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  forgotPassword: async (email: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    return handleResponse(response);
  },

  resetPassword: async (token: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, password }),
    });
    return handleResponse(response);
  },
};

// Items API
export const itemsAPI = {
  getAll: async (filters?: any) => {
    const params = new URLSearchParams(filters);
    const response = await fetch(`${API_BASE_URL}/items?${params}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  getFeatured: async () => {
    const response = await fetch(`${API_BASE_URL}/items/featured`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  getById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/items/${id}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  create: async (itemData: any) => {
    const response = await fetch(`${API_BASE_URL}/items`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(itemData),
    });
    return handleResponse(response);
  },

  update: async (id: string, itemData: any) => {
    const response = await fetch(`${API_BASE_URL}/items/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(itemData),
    });
    return handleResponse(response);
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/items/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  toggleAvailability: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/items/${id}/toggle-availability`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
};

// Swaps API
export const swapsAPI = {
  create: async (swapData: any) => {
    const response = await fetch(`${API_BASE_URL}/swaps`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(swapData),
    });
    return handleResponse(response);
  },

  getMySwaps: async () => {
    const response = await fetch(`${API_BASE_URL}/swaps/my-swaps`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  getById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/swaps/${id}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  accept: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/swaps/${id}/accept`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  reject: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/swaps/${id}/reject`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  complete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/swaps/${id}/complete`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  cancel: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/swaps/${id}/cancel`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
};

// Messages API
export const messagesAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/messages`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  getConversation: async (userId: string) => {
    const response = await fetch(`${API_BASE_URL}/messages/conversation/${userId}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  send: async (messageData: any) => {
    const response = await fetch(`${API_BASE_URL}/messages`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(messageData),
    });
    return handleResponse(response);
  },

  markAsRead: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/messages/${id}/read`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/messages/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
};

// Profile API
export const profileAPI = {
  getProfile: async () => {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  updateProfile: async (profileData: any) => {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(profileData),
    });
    return handleResponse(response);
  },
};

// Upload API
export const uploadAPI = {
  uploadSingle: async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch(`${API_BASE_URL}/upload/single`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: formData,
    });
    return handleResponse(response);
  },

  uploadMultiple: async (files: File[]) => {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append('images', file);
    });
    
    const response = await fetch(`${API_BASE_URL}/upload/multiple`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: formData,
    });
    return handleResponse(response);
  },
};

// Health check
export const healthCheck = async () => {
  const response = await fetch(`${API_BASE_URL}/health`);
  return handleResponse(response);
}; 