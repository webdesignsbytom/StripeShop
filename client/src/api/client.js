import axios from 'axios';

const host = process.env.REACT_APP_API_URL;
const tokenKey = process.env.REACT_APP_USER_TOKEN;

// Helper function to get Authorization headers
const getAuthHeaders = () => {
  const token = localStorage.getItem(tokenKey);
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Error handling function
const handleError = (error) => {
  let errorMessage = 'An unexpected error occurred.';

  if (error.response) {
    // Check if the API provided a specific error message
    if (error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message; // Detailed API message
    } else {
      // Handle specific HTTP error codes if no message provided
      switch (error.response.status) {
        case 401:
          errorMessage = 'Unauthorized - Please check your credentials.';
          break;
        case 403:
          errorMessage = 'Forbidden - You do not have access.';
          break;
        case 404:
          errorMessage = 'Resource not found.';
          break;
        default:
          errorMessage = 'An unexpected server error occurred.';
      }
    }
  } else if (error.request) {
    // No response received
    errorMessage = 'No response from the server. Please try again.';
  } else {
    // Request setup issue
    errorMessage = error.message;
  }

  // Return error object with a custom message
  return Promise.reject({ ...error, message: errorMessage });
};

const client = {
  // GET request with optional token
  get: async (path, withToken = true) => {
    const url = `${host}${path}`;
    const headers = withToken ? getAuthHeaders() : {};

    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  // POST request with optional token
  post: async (path, data, withToken = true) => {
    const url = `${host}${path}`;
    const headers = withToken ? getAuthHeaders() : {};

    try {
      const response = await axios.post(url, data, { headers });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  // PATCH request with optional token
  patch: async (path, data, withToken = true) => {
    const url = `${host}${path}`;
    const headers = withToken ? getAuthHeaders() : {};

    try {
      const response = await axios.patch(url, data, { headers });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  // DELETE request with optional token
  delete: async (path, withToken = true) => {
    const url = `${host}${path}`;
    const headers = withToken ? getAuthHeaders() : {};

    try {
      const response = await axios.delete(url, { headers });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },
};

export default client;