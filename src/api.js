// src/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.wahidiya.com/api', // Replace with your API's URL
});

const api = {
  getProducts: async () => {
    try {
      const response = await instance.get('/product');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
  getProductById: async (productId) => {
    try {
      const response = await instance.get(`/product/${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product with ID ${productId}:`, error);
      throw error;
    }
  },
  // Add more API calls as needed
};

export default api;
