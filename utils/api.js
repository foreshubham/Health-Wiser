import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

// Function to add product to the database
export const addProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/products/add`, productData);
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};
