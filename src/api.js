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
  getOtpInSignup: async (phone)=> {
    try {
      const response = await instance.get(`/auth/otp-signup/${phone}`);
      return response.data;
    } catch (error) {
      console.error(`Error OTP at sign up with phone ${phone}:`, error);
      throw error;
    }
  },
  verifyOtp: async (otp, phone)=> {
    try {
      const response = await instance.post(`/auth/otp-verify`, {otp:otp, phone:phone});
      //console.log("1. ", response);
      //console.log("2. ", response.data);
      return response.data;
    } catch (error) {
      console.error(`Error OTP at sign up with phone ${phone}:`, error);
      throw error;
    }
  },

  signup: async (customer)=> {
    try {
      const response = await instance.put(`/auth/signup/${customer.componentId}`, customer);
      return response.data;
    } catch (error) {
      console.error(`Error at sign up with customer ${customer}:`, error);
      throw error;
    }
  }
  // Add more API calls as needed
};

export default api;
